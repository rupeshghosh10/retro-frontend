import { Link } from 'react-router';
import RoutesEnum from '@/routesEnum';

const Navbar = () => {
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
    <nav className="fixed hidden h-screen w-52 pl-3 pt-4 sm:flex sm:flex-col">
      <div className="prose">
        <h1 className="text-2xl">Retro App</h1>
      </div>
      <div className="flex-1 pt-5">
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
    </nav>
  );
};

export default Navbar;
