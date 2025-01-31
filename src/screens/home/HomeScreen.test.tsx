import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import RoutesEnum from '@/routesEnum';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('render correctly', () => {
    render(
      <MemoryRouter>
        <HomeScreen />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /Create Board/i })).toHaveAttribute(
      'href',
      RoutesEnum.CreateBoard
    );

    expect(screen.getByRole('link', { name: /Join a Board/i })).toHaveAttribute(
      'href',
      RoutesEnum.JoinBoard
    );
  });
});
