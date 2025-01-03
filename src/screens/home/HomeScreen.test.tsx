import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('render correctly', () => {
    render(<HomeScreen />);

    expect(screen.getByText('Create Board')).toBeInTheDocument();
    expect(screen.getByText('Join a Board')).toBeInTheDocument();
  });
});
