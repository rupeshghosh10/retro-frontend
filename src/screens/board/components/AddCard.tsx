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
        return 'textarea-success';
      case 'error':
        return 'textarea-error';
      case 'warning':
        return 'textarea-warning';
      case 'info':
        return 'textarea-info';
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
      <textarea
        placeholder="Type here"
        className={`textarea min-h-14 w-full bg-primary-content p-2 leading-[1] ${getBorderColor()}`}
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button
        className={`btn btn-link btn-sm ml-auto mr-1 mt-1 block self-start no-underline ${getBtnColor()}`}
        onClick={() => onAdd(content)}
      >
        Add
      </button>
    </div>
  );
};

export default AddCard;
