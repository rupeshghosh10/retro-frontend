import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import RoutesEnum from '@/routesEnum';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders the correct links', () => {
    render(
      <MemoryRouter>
        <Navbar theme="" toggleTheme={vi.fn()} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(3);

    expect(links[0]).toHaveTextContent('Home');
    expect(links[0]).toHaveAttribute('href', RoutesEnum.Home);

    expect(links[1]).toHaveTextContent('Create');
    expect(links[1]).toHaveAttribute('href', RoutesEnum.CreateBoard);

    expect(links[2]).toHaveTextContent('Join');
    expect(links[2]).toHaveAttribute('href', RoutesEnum.JoinBoard);
  });
});
