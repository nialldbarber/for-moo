import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../todos.slice';
import { Button } from '../todo-item/styles';
import { Input } from './styles';

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const [fillSomethingIn, setFillSomethingIn] = useState(false);

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo === '') {
      setFillSomethingIn(true);
      return;
    }
    dispatch(addTodo(todo));
    setTodo('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    setFillSomethingIn(false);
  };

  return (
    <div>
      {fillSomethingIn && <p>Fill something in!</p>}
      <p>TodoForm</p>
      <form onSubmit={handleAddTodo}>
        <Input
          type="text"
          name="title"
          id="title"
          value={todo}
          onChange={handleChange}
          placeholder="Add todo"
        />
        <Button type="submit">+</Button>
      </form>
    </div>
  );
};
