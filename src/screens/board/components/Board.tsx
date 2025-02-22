import { useState } from 'react';
import { useSubscription } from 'react-stomp-hooks';
import { useShallow } from 'zustand/shallow';
import useBoardStore from '@/store/useBoardStore';
import Column from './Column';
import Snackbar from './SnackBar';
import Timer from './Timer';

export interface CardContent {
  text: string;
  user?: string;
}

const Board = () => {
  const [boardId, boardName] = useBoardStore(useShallow(x => [x.boardId, x.boardName]));
  const [cards, setCard] = useState<CardContent[]>([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useSubscription('/topic/messages', message => setCard(x => [...x, { text: message.body }]));

  const showTimerEndMessage = (message: string) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 5000);
  };

  const columns = [
    { title: 'What went well?', type: 'success' },
    { title: 'What did not go well?', type: 'error' },
    { title: 'What can be improved?', type: 'warning' },
    { title: 'Action items', type: 'info' },
  ];

  return (
    <div className="ml-52 mr-24 flex h-screen flex-col pt-8">
      <Snackbar
        message={snackbarMessage}
        isVisible={showSnackbar}
        onClose={() => setShowSnackbar(false)}
      />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="prose">
            <h1>{boardName}</h1>
            <p className="-mt-5 text-lg">
              Board Code: <strong>{boardId}</strong>
            </p>
          </div>
          <Timer onTimerEnd={showTimerEndMessage} />
        </div>
        <div className="flex justify-between gap-4 pt-8">
          {columns.map(x => (
            <Column key={x.type} title={x.title} type={x.type} cards={cards} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
