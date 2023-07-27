import { useDispatch } from 'react-redux';
import { removeTodo } from '../../todos.slice';

type Props = {
  id: number;
  title: string;
};

export const TodoItem = ({ id, title }: Props) => {
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <p>{title}</p>
      <button onClick={handleRemoveTodo}>x</button>
    </div>
  );
};
