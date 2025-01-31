import { PlusIcon, UserGroupIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router';
import RoutesEnum from '@/routesEnum';

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="prose text-center">
        <h1 className="text-5xl">Welcome to Retro App</h1>
        <p className="text-lg sm:text-2xl">
          Create or join anonymous boards instantly. No login required, just pure collaboration.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-5 sm:flex-row">
        <Link to={RoutesEnum.CreateBoard} className="btn btn-primary btn-md sm:btn-lg">
          <PlusIcon className="h-7 w-7" />
          <span>Create Board</span>
        </Link>
        <Link to={RoutesEnum.JoinBoard} className="btn btn-primary btn-md sm:btn-lg">
          <UserGroupIcon className="h-7 w-7" />
          <span>Join a Board</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
