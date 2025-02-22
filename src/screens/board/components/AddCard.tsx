import { useState } from 'react';

interface AddCardProps {
  type: string;
  onAdd: (content: string) => void;
}

const AddCard = ({ type, onAdd }: AddCardProps) => {
  const [content, setContent] = useState('');

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return 'input-success';
      case 'error':
        return 'input-error';
      case 'warning':
        return 'input-warning';
      case 'info':
        return 'input-info';
    }
  };

  const getBtnColor = () => {
    switch (type) {
      case 'success':
        return 'text-success';
      case 'error':
        return 'text-error';
      case 'warning':
        return 'text-warning';
      case 'info':
        return 'text-info';
    }
  };

  return (
    <div className="rounded-lg border bg-primary-content px-2 pb-1 pt-3">
      <input
        type="text"
        placeholder="Type here"
        className={`input input-bordered w-full max-w-xs bg-white ${getBorderColor()}`}
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button
        className={`btn btn-link btn-sm ml-auto mt-1 no-underline ${getBtnColor()}`}
        onClick={() => onAdd(content)}
      >
        Add
      </button>
    </div>
  );
};

export default AddCard;
