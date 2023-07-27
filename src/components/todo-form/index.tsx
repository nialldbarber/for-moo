import { useState } from 'react';
import type { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../todos.slice';

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <div>
      <p>TodoForm</p>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="title">
          New todo
          <input
            type="text"
            name="title"
            id="title"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
