import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'garden');

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return () => setTheme(currentTheme => (currentTheme === 'garden' ? 'dracula' : 'garden'));
};

export default useTheme;
