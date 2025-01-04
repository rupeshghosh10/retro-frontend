import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CreateBoardScreen from './CreateBoardScreen';
import { MemoryRouter } from 'react-router';
import RoutesEnum from '@/routesEnum';

describe('CreateBoardScreen', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <CreateBoardScreen />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /Cancel/i })).toHaveAttribute('href', RoutesEnum.Home);
  });
});
