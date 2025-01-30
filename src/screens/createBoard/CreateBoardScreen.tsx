import { PlusIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Link } from 'react-router';
import { createBoard } from '@/api/board';
import RoutesEnum from '@/routesEnum';
import Input from './components/Input';

const CreateBoardScreen = () => {
  const [boardName, setBoardName] = useState('');
  const [userName, setUserName] = useState('');

  const handleCreateBoard = async () => {
    const data = await createBoard(boardName, userName);
    console.log(data);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-3/4 sm:w-1/3">
        <div className="prose">
          <h1>Create a New Board</h1>
          <p className="text-xl">Set up your retro board and share it with your team.</p>
        </div>
        <Input
          id="boardName"
          label="Board Name"
          placeholder="eg. Sprint Retrospective #4"
          value={boardName}
          onChange={setBoardName}
        />
        <Input
          id="userName"
          label="User Name"
          placeholder="eg. James"
          value={userName}
          onChange={setUserName}
        />
        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-3 sm:flex-row sm:gap-0">
          <Link to={RoutesEnum.Home} className="btn btn-ghost">
            Cancel
          </Link>
          <button className="btn btn-primary" onClick={handleCreateBoard}>
            <PlusIcon className="h-7 w-7" />
            <span>Create a Board</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBoardScreen;
