interface CardProps {
  text: string;
  username: string;
}

const Card = ({ text, username }: CardProps) => {
  return (
    <div className="rounded border bg-primary-content p-2">
      <p>{text}</p>
      <p className="mt-2 text-sm">{username}</p>
    </div>
  );
};

export default Card;
