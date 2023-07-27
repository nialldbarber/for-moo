import React from 'react';
import { describe, test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import { TodoItem } from '../../src/components/todo-item';

describe('TodoItem', () => {
  test('should render title', () => {
    renderWithProviders(<TodoItem id={1} title="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
