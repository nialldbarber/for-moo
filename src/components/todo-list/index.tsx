import { useSelector } from 'react-redux';
import type { Todos } from '../../App';
import { TodoItem } from '../todo-item';
import type { RootState } from '../../store';
import { Container } from './styles';

type Props = {
  data?: Todos[];
};

export const TodoList = ({ data }: Props) => {
  const moreTodos = useSelector((state: RootState) => state.moreTodos.todos);

  return (
    <Container>
      {/* from redux */}
      {moreTodos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
      {/* from fetch */}
      {data?.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </Container>
  );
};
