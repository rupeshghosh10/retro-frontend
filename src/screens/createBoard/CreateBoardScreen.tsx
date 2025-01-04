import RoutesEnum from '@/routesEnum';
import { PlusIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router';

const CreateBoardScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3">
        <div className="prose">
          <h1>Create a New Board</h1>
          <p className="text-xl">Set up your retro board and share it with your team.</p>
        </div>
        <div className="flex flex-col mt-10">
          <label htmlFor="boardName" className="font-medium text-lg pl-1">
            Board Name
          </label>
          <input
            id="boardName"
            name="boardName"
            type="text"
            className="input input-bordered w-full mt-2"
            placeholder="eg. Sprint Retrospective #4"
          />
        </div>
        <div className="flex justify-between mt-14">
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
