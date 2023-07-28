import React from 'react';
import { describe, test, expect } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import Todo from '../../src/Todo';

describe('Feature -> Todo', () => {
  beforeEach(() => {
    renderWithProviders(<Todo />);
  });

  test('should initially show loading status', () => {
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render title', async () => {
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(screen.getByText('Todos')).toBeInTheDocument();
  });
});
