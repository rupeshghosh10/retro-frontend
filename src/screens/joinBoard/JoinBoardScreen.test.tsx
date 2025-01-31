import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { joinBoard } from '@/api/board';
import { JoinBoardResponse } from '@/api/responses/JoinBoardResponse';
import RoutesEnum from '@/routesEnum';
import JoinBoardScreen from './JoinBoardScreen';

describe('JoinBoardScreen', () => {
  vi.mock('@/api/board');

  vi.mock('react-router', async () => {
    const actual = await vi.importActual('react-router');
    return { ...actual, useNavigate: vi.fn() };
  });

  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <JoinBoardScreen />
      </MemoryRouter>
    );

    expect(screen.getByText('Join a Board')).toBeInTheDocument();
    expect(screen.getByText('Join Board')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Cancel/i })).toHaveAttribute('href', RoutesEnum.Home);
  });

  it('should call joinBoard and navigate when Join Board button is clicked', async () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(joinBoard).mockResolvedValue(undefined as unknown as JoinBoardResponse);

    render(
      <MemoryRouter>
        <JoinBoardScreen />
      </MemoryRouter>
    );

    await userEvent.type(screen.getByLabelText('Board Name'), 'Retro #3');
    await userEvent.type(screen.getByLabelText('Your Nickname'), 'Sam');

    const joinButton = screen.getByRole('button', { name: /join board/i });
    await userEvent.click(joinButton);

    await waitFor(() => {
      expect(joinBoard).toHaveBeenCalledWith('Retro #3', 'Sam');
      expect(mockNavigate).toHaveBeenCalledWith(RoutesEnum.Board);
    });
  });
});
