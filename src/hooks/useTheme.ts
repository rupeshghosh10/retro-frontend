import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'garden');

  useEffect(() => {
    const htmlTag = document.querySelector('html')!;
    if (htmlTag.getAttribute('data-theme') !== theme) {
      htmlTag.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'garden' ? 'dracula' : 'garden'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
