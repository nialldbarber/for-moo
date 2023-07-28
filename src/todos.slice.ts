import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Todos } from './Todo';

const getUniqueId = () => Number(new Date().getTime().toString());

type TodosSlice = {
  todos: Todos[];
};

const initialState: TodosSlice = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newItem = {
        id: getUniqueId(),
        completed: false,
        title: action.payload,
        userId: getUniqueId(),
      };
      state.todos.push(newItem);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
