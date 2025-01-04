import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeScreen from './HomeScreen';
import { MemoryRouter } from 'react-router';
import RoutesEnum from '@/routesEnum';

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
  });
});
