import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('should render correctly with given props', () => {
    render(
      <FormInput
        id="test-input"
        label="Test Label"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
      />
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('should call onChange when user types', async () => {
    const handleChange = vi.fn();

    render(
      <FormInput
        id="test-input"
        label="Test Label"
        placeholder="Enter text"
        value=""
        onChange={handleChange}
      />
    );

    await userEvent.type(screen.getByLabelText('Test Label'), 'Hello');

    expect(handleChange).toHaveBeenCalledTimes(5);
  });
});
