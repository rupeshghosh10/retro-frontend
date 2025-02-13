import { useState } from 'react';
import { useShallow } from 'zustand/shallow';
import apiClient from '@/api/client/apiClient';
import useBoardStore from '@/store/useBoardStore';
import AddCard from './AddCard';
import Card from './Card';

interface ColumnProps {
  title: string;
  type: string;
}

const Column = ({ title, type }: ColumnProps) => {
  const [cards] = useState([
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user: 'Test',
    },
  ]);
  const [boardId, userName] = useBoardStore(useShallow(x => [x.boardId, x.username]));

  const handleAdd = async (content: string) => {
    await apiClient.post(`/api/board/${boardId}/note?userName=${userName}`, {
      cardContent: content,
    });
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
    <div
      className={`flex min-h-96 w-full flex-col gap-2 rounded-xl bg-opacity-25 p-4 ${getBgColor()}`}
    >
      <p className="mb-5 text-center text-xl">{title}</p>
      {cards.map((x, i) => (
        <Card key={x.text + i} text={x.text} username={x.user} />
      ))}
      <AddCard onAdd={handleAdd} />
    </div>
  );
};

export default Column;
