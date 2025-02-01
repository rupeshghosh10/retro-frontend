import { useShallow } from 'zustand/shallow';
import useBoardStore from '@/store/useBoardStore';
import Column from './components/Column';

const BoardScreen = () => {
  const [boardId, boardName, username] = useBoardStore(
    useShallow(x => [x.boardId, x.boardName, x.username])
  );
  console.log([boardId, boardName, username]);

  const columns = [
    { title: 'What went well?', type: 'success' },
    { title: 'What did not go well?', type: 'error' },
    { title: 'What can be improved?', type: 'warning' },
    { title: 'Action items', type: 'info' },
  ];

  return (
    <div className="ml-60 mr-32 flex h-screen pt-5">
      <div className="w-full">
        <div className="prose">
          <h1>{boardName}</h1>
          <p className="-mt-5 text-lg">
            Board Code: <strong>{boardId}</strong>
          </p>
        </div>
        <div className="flex justify-between gap-8 pt-8">
          {columns.map(x => (
            <Column title={x.title} type={x.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardScreen;
