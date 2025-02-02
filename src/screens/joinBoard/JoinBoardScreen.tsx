import { UserGroupIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { joinBoard } from '@/api/board';
import FormInput from '@/components/FormInput';
import FormTitle from '@/components/FormTitle';
import RoutesEnum from '@/routesEnum';
import useBoardStore from '@/store/useBoardStore';

const JoinBoardScreen = () => {
  const [boardCode, setBoardCode] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const setBoard = useBoardStore(x => x.setBoard);

  const handleJoinBoard = async () => {
    const data = await joinBoard(boardCode, username);
    setBoard(username, boardCode, data?.boardUser?.board?.name);
    navigate(RoutesEnum.Board);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-3/4 sm:w-1/3">
        <FormTitle
          title="Join a Board"
          subtitle="Enter the board code shared with you to join the session."
        />
        <FormInput
          id="boardCode"
          label="Board Code"
          placeholder="eg. Sprint Retrospective #4"
          value={boardCode}
          onChange={setBoardCode}
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
          <button className="btn btn-primary" onClick={handleJoinBoard}>
            <UserGroupIcon className="h-7 w-7" />
            <span>Join Board</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinBoardScreen;
