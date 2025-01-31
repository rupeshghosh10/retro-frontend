import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormTitle from './FormTitle';

describe('FormTitle', () => {
  it('should render the title and subtitle correctly', () => {
    render(<FormTitle title="Test Title" subtitle="This is a test subtitle" />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Title');
    expect(screen.getByText('This is a test subtitle')).toBeInTheDocument();
  });
});
