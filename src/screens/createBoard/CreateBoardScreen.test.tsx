import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { createBoard } from '@/api/board';
import RoutesEnum from '@/routesEnum';
import CreateBoardScreen from './CreateBoardScreen';

describe('CreateBoardScreen', () => {
  vi.mock('@/api/board');

  vi.mock('react-router', async () => {
    const actual = await vi.importActual('react-router');
    return { ...actual, useNavigate: vi.fn() };
  });

  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <CreateBoardScreen />
      </MemoryRouter>
    );

    expect(screen.getByText('Create a New Board')).toBeInTheDocument();
    expect(screen.getByText('Create Board')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Cancel/i })).toHaveAttribute('href', RoutesEnum.Home);
  });

  it('should call createBoard and navigate when Create Board button is clicked', async () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(createBoard).mockResolvedValue({ publicId: '123', name: 'Retro #2' });

    render(
      <MemoryRouter>
        <CreateBoardScreen />
      </MemoryRouter>
    );

    await userEvent.type(screen.getByLabelText('Board Name'), 'Retro #2');
    await userEvent.type(screen.getByLabelText('Your Nickname'), 'Jackie');

    const createButton = screen.getByRole('button', { name: /create board/i });
    await userEvent.click(createButton);

    await waitFor(() => {
      expect(createBoard).toHaveBeenCalledWith('Retro #2', 'Jackie');
      expect(mockNavigate).toHaveBeenCalledWith(RoutesEnum.Board);
    });
  });
});
