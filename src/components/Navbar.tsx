import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router';
import RoutesEnum from '@/routesEnum';

interface NavbarProps {
  toggleTheme: () => void;
}

const Navbar = ({ toggleTheme }: NavbarProps) => {
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
      to: '',
    },
  ];

  return (
    <nav className="fixed hidden h-screen w-40 pl-3 pt-4 sm:flex sm:flex-col">
      <div className="prose">
        <h1 className="text-2xl">Retro App</h1>
      </div>
      <div className="pt-5">
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
      <div className="mt-auto flex items-center justify-between px-3 pb-4">
        <p className="pb-1 font-semibold">Theme</p>
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            value="garden"
            onClick={toggleTheme}
          />
          <SunIcon className="swap-on h-6 w-6" />
          <MoonIcon className="swap-off h-6 w-6" />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
