import { useState } from 'react';
import { useShallow } from 'zustand/shallow';
import apiClient from '@/api/client/apiClient';
import useBoardStore from '@/store/useBoardStore';
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

  const handleAdd = async () => {
    await apiClient.post(`/api/board/${boardId}/note?userName=${userName}`, {
      cardContent: 'New Card Content',
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
    <div className={`min-h-96 w-full rounded-xl bg-opacity-25 p-4 ${getBgColor()}`}>
      <p className="mb-5 text-center text-xl">{title}</p>
      {cards.map((x, i) => (
        <Card key={x.text + i} text={x.text} username={x.user} />
      ))}
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Column;
