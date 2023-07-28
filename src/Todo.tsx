import { z } from 'zod';
import { useFetch } from './hooks/useFetch';
import { TodoList } from './components/todo-list';
import { TodoForm } from './components/todo-form';

const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  userId: z.number(),
});
export type Todos = z.infer<typeof todoSchema>;

const Todo = () => {
  const { data, loading, error } = useFetch<Todos[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log('the error is: ', error);
    return <p>Error!</p>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm />
      <TodoList data={data} />
    </div>
  );
};

export default Todo;
