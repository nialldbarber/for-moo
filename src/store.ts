import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todos.slice';

export const store = configureStore({
  reducer: {
    moreTodos: todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
