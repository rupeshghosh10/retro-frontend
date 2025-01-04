import RoutesEnum from '@/routesEnum';
import { PlusIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router';

const CreateBoardScreen = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-1/3">
        <div className="prose">
          <h1>Create a New Board</h1>
          <p className="text-xl">Set up your retro board and share it with your team.</p>
        </div>
        <div className="mt-10 flex flex-col">
          <label htmlFor="boardName" className="pl-1 text-lg font-medium">
            Board Name
          </label>
          <input
            id="boardName"
            name="boardName"
            type="text"
            className="input input-bordered mt-2 w-full"
            placeholder="eg. Sprint Retrospective #4"
          />
        </div>
        <div className="mt-14 flex justify-between">
          <Link to={RoutesEnum.Home} className="btn btn-ghost">
            Cancel
          </Link>
          <button className="btn btn-primary">
            <PlusIcon className="h-7 w-7" />
            <span>Create a Board</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBoardScreen;
