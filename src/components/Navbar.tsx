import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router';
import RoutesEnum from '@/routesEnum';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    {
      name: 'Home',
      to: RoutesEnum.Home,
    },
    {
      name: 'Create',
      to: RoutesEnum.CreateBoard,
    },
    {
      name: 'Join',
      to: RoutesEnum.JoinBoard,
    },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-36 sm:flex sm:flex-col sm:pl-3 sm:pt-4">
      <label className="btn btn-circle swap swap-rotate ml-1 mt-1 sm:hidden">
        <input
          defaultChecked={isMobileMenuOpen}
          type="checkbox"
          onClick={() => setIsMobileMenuOpen(x => !x)}
        />
        <Bars3Icon className="swap-off h-6 w-6" />
        <XMarkIcon className="swap-on h-6 w-6" />
      </label>
      <div className="prose hidden sm:block">
        <h1 className="text-2xl">Retro App</h1>
      </div>
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-screen bg-secondary-content sm:block sm:w-auto sm:bg-inherit sm:pt-5`}
      >
        <ul>
          {links.map(link => (
            <li key={link.name}>
              <Link to={link.to} className="btn btn-ghost mr-auto flex w-full justify-start">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto hidden items-center justify-between px-3 pb-4 sm:flex">
        <p className="pb-1 text-sm font-semibold">Theme</p>
        <label className="swap pb-1">
          <input type="checkbox" defaultChecked={theme === 'garden'} onClick={toggleTheme} />
          <SunIcon className="swap-on h-6 w-6" />
          <MoonIcon className="swap-off h-6 w-6" />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
