import { useDispatch } from 'react-redux';
import { removeTodo } from '../../todos.slice';
import { Button, Container } from './styles';

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
    <Container>
      <p>{title}</p>
      <Button onClick={handleRemoveTodo}>x</Button>
    </Container>
  );
};
