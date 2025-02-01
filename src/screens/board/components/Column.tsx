interface ColumnProps {
  title: string;
  type: string;
}

const Column = ({ type }: ColumnProps) => {
  return <div className={`min-h-80 w-full rounded-xl bg-${type} bg-opacity-25`}></div>;
};

export default Column;
