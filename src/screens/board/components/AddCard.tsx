import { useState } from 'react';

interface AddCardProps {
  onAdd: (content: string) => void;
}

const AddCard = ({ onAdd }: AddCardProps) => {
  const [content, setContent] = useState('');

  return (
    <div className="rounded border bg-primary-content p-2">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button className="btn btn-primary btn-sm mt-2" onClick={() => onAdd(content)}>
        Add
      </button>
    </div>
  );
};

export default AddCard;
