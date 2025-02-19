import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Routes from './Routes';
import RoutesEnum from './routesEnum';

vi.mock('@/components/Navbar', () => ({
  default: vi.fn(() => <nav>Mock Navbar</nav>),
}));
vi.mock('@/hooks/useTheme', () => ({
  default: () => ({ theme: 'light', toggleTheme: vi.fn() }),
}));
vi.mock('@/screens/home/HomeScreen', () => ({
  default: vi.fn(() => <div>Home Screen</div>),
}));
vi.mock('@/screens/createBoard/CreateBoardScreen', () => ({
  default: vi.fn(() => <div>Create Board Screen</div>),
}));
vi.mock('@/screens/joinBoard/JoinBoardScreen', () => ({
  default: vi.fn(() => <div>Join Board Screen</div>),
}));
vi.mock('@/screens/board/BoardScreen', () => ({
  default: vi.fn(() => <div>Board Screen</div>),
}));

describe('Routes component', () => {
  it('renders Home screen by default', () => {
    window.history.pushState({}, 'Home', `/retro-frontend${RoutesEnum.Home}`);
    render(<Routes />);
    expect(screen.getByText('Home Screen')).toBeInTheDocument();
  });

  it('renders CreateBoardScreen when navigating to CreateBoard', () => {
    window.history.pushState({}, 'Create Board', `/retro-frontend${RoutesEnum.CreateBoard}`);
    render(<Routes />);
    expect(screen.getByText('Create Board Screen')).toBeInTheDocument();
  });

  it('renders JoinBoardScreen when navigating to JoinBoard', () => {
    window.history.pushState({}, 'Join Board', `/retro-frontend${RoutesEnum.JoinBoard}`);
    render(<Routes />);
    expect(screen.getByText('Join Board Screen')).toBeInTheDocument();
  });

  it('renders BoardScreen when navigating to Board', () => {
    window.history.pushState({}, 'Board', `/retro-frontend${RoutesEnum.Board}`);
    render(<Routes />);
    expect(screen.getByText('Board Screen')).toBeInTheDocument();
  });
});
