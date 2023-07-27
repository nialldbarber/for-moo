import { z } from 'zod';
import { useFetch } from './hooks/useFetch';
import { TodoList } from './components/todo-list';
import { TodoForm } from './components/todo-form';
import './App.css';

const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  userId: z.number(),
});
export type Todos = z.infer<typeof todoSchema>;

const App = () => {
  const { data, loading, error } = useFetch<Todos[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );

  // console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <TodoForm />
      <TodoList data={data} />
    </div>
  );
};

export default App;
