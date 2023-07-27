import { useDispatch } from 'react-redux';

type Props = {
  title: string;
};

export const TodoItem = ({ title }: Props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
