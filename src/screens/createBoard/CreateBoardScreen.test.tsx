import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import RoutesEnum from '@/routesEnum';
import CreateBoardScreen from './CreateBoardScreen';

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
