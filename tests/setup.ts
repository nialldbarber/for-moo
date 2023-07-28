import 'whatwg-fetch';
import { expect, afterEach, afterAll, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const todos = [
  { id: 1, text: 'Buy milk', completed: false },
  { id: 2, text: 'Buy eggs', completed: false },
  { id: 3, text: 'Buy bread', completed: false },
];

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];

const server = setupServer(...handlers);
// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
//  Close server after all tests
afterAll(() => server.close());
// Reset handlers after each test `important for test isolation`
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);
