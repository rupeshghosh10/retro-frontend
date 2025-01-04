import RoutesEnum from '@/routesEnum';
import { PlusIcon, UserGroupIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="prose">
        <h1 className="text-5xl">Welcome to Retro App</h1>
        <p className="text-center text-2xl">
          Create or join anonymous boards instantly. No login required, just pure collaboration.
        </p>
      </div>
      <div className="mt-12 flex gap-5">
        <Link to={RoutesEnum.CreateBoard} className="btn btn-primary btn-lg">
          <PlusIcon className="h-7 w-7" />
          <span>Create Board</span>
        </Link>
        <button className="btn btn-primary btn-lg">
          <UserGroupIcon className="h-7 w-7" />
          <span>Join a Board</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
