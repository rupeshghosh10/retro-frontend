interface CardProps {
  text: string;
  username: string;
  type: string;
}

const Card = ({ text, username, type }: CardProps) => {
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

  return (
    <div
      className={`rounded-lg border-2 bg-primary-content bg-opacity-60 px-2 py-1 ${getBorderColor()}`}
    >
      <p>{text}</p>
      <p className="mt-1 text-xs text-secondary">{username}</p>
    </div>
  );
};

export default Card;
