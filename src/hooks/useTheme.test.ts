import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useTheme from './useTheme';

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: { getItem: vi.fn(), setItem: vi.fn() },
    writable: true,
  });

  vi.spyOn(document, 'querySelector').mockImplementation(selector => {
    if (selector === 'html') {
      return {
        setAttribute: vi.fn(),
        getAttribute: vi.fn(),
      } as unknown as HTMLElement;
    }
    return null;
  });
});

describe('useTheme', () => {
  it('should initialize with the theme from localStorage or default to "garden"', () => {
    vi.mocked(window.localStorage.getItem).mockReturnValue(null);

    const { result } = renderHook(() => useTheme());

    expect(window.localStorage.getItem).toHaveBeenCalledWith('theme');
    expect(result.current.theme).toBe('garden');
  });

  it('should initialize with the theme from localStorage if available', () => {
    vi.mocked(window.localStorage.getItem).mockReturnValue('dracula');

    const { result } = renderHook(() => useTheme());

    expect(window.localStorage.getItem).toHaveBeenCalledWith('theme');
    expect(result.current.theme).toBe('dracula');
  });

  it('should toggle the theme between "garden" and "dracula"', () => {
    const mockHtmlTag = {
      setAttribute: vi.fn(),
      getAttribute: vi.fn().mockReturnValue('garden'),
    } as unknown as Element;
    vi.mocked(document.querySelector).mockReturnValue(mockHtmlTag);

    const { result } = renderHook(() => useTheme());

    act(() => result.current.toggleTheme());

    expect(mockHtmlTag.setAttribute).toHaveBeenCalledWith('data-theme', 'dracula');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', 'dracula');
    expect(result.current.theme).toBe('dracula');
  });
});
