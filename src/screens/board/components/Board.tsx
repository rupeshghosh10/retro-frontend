import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSubscription } from 'react-stomp-hooks';
import { getBoard } from '@/api/board';
import { Card } from '@/api/responses/BoardResponse';
import Snackbar from '../../../components/SnackBar';
import Column from './Column';
import Timer from './Timer';

const Board = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { boardId } = useParams();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['board'],
    queryFn: () => getBoard(boardId ?? ''),
  });

  useEffect(() => {
    if (isSuccess) {
      setCards(data.cards);
    }
  }, [data?.cards, isSuccess]);

  useSubscription(`/topic/board/${boardId}/messages`, message =>
    setCards(x => [
      ...x,
      {
        columnType: JSON.parse(message.body).columnType,
        text: JSON.parse(message.body).cardContent,
        user: {
          name: 'New',
          publicId: 'New',
        },
      },
    ])
  );

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
      {isLoading ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="loading loading-spinner w-14" />
        </div>
      ) : (
        <div className="h-full w-full">
          <div className="flex items-center justify-between">
            <div className="prose">
              <h1>{data?.boardName}</h1>
              <p className="-mt-5 text-lg">
                Board Code: <strong>{boardId}</strong>
              </p>
            </div>
            <Timer onTimerEnd={showTimerEndMessage} />
          </div>
          <div className="flex h-[calc(100vh-9rem)] justify-between gap-4 pt-8">
            {columns.map(x => (
              <Column
                key={x.type}
                title={x.title}
                type={x.type}
                cards={cards.filter(y => y.columnType === x.type) ?? []}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
