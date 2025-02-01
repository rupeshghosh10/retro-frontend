import { PlusIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { createBoard } from '@/api/board';
import FormInput from '@/components/FormInput';
import FormTitle from '@/components/FormTitle';
import RoutesEnum from '@/routesEnum';
import useBoardStore from '@/store/useBoardStore';

const CreateBoardScreen = () => {
  const [boardName, setBoardName] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const setBoard = useBoardStore(x => x.setBoard);

  const handleCreateBoard = async () => {
    const data = await createBoard(boardName, username);
    setBoard(username, data.publicId, boardName);
    navigate(RoutesEnum.Board);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-3/4 sm:w-1/3">
        <FormTitle
          title="Create a New Board"
          subtitle="Set up your retro board and share it with your team."
        />
        <FormInput
          id="boardName"
          label="Board Name"
          placeholder="eg. Sprint Retrospective #4"
          value={boardName}
          onChange={setBoardName}
        />
        <FormInput
          id="userName"
          label="Your Nickname"
          placeholder="eg. James"
          value={username}
          onChange={setUsername}
        />
        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-3 sm:flex-row sm:gap-0">
          <Link to={RoutesEnum.Home} className="btn btn-ghost">
            Cancel
          </Link>
          <button className="btn btn-primary" onClick={handleCreateBoard}>
            <PlusIcon className="h-7 w-7" />
            <span>Create Board</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBoardScreen;
