import { useParams } from 'react-router';
import apiClient from '@/api/client/apiClient';
import { Card as CardResponse } from '@/api/responses/BoardResponse';
import useBoardStore from '@/store/useBoardStore';
import AddCard from './AddCard';
import Card from './Card';

interface ColumnProps {
  title: string;
  type: string;
  cards: CardResponse[];
}

const Column = ({ title, type, cards }: ColumnProps) => {
  const userName = useBoardStore(x => x.username);
  const { boardId } = useParams();

  const handleAdd = async (content: string) => {
    await apiClient.post(
      `/api/board/${boardId}/note`,
      {
        cardContent: content,
        columnType: type,
      },
      {
        params: {
          userName,
          column: type,
        },
      }
    );
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-success';
      case 'error':
        return 'bg-error';
      case 'warning':
        return 'bg-warning';
      case 'info':
        return 'bg-info';
    }
  };

  return (
    <div className={`flex w-full flex-col gap-2 rounded-xl bg-opacity-25 p-4 ${getBgColor()}`}>
      <p className="mb-5 text-center text-xl">{title}</p>
      {cards.map((x, i) => (
        <Card key={x.text + i} text={x.text} username={x.user.name} type={type} />
      ))}
      <AddCard onAdd={handleAdd} type={type} />
    </div>
  );
};

export default Column;
