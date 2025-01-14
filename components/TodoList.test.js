// TodoList.test.js
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('should render existing tasks', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('Doctor Appointment')).toBeTruthy();
    expect(getByText('Meeting at School')).toBeTruthy();
  });

  it('should add a new task', () => {
    const { getByText, getByPlaceholderText } = render(<TodoList />);
    const input = getByPlaceholderText('New Task');
    fireEvent.changeText(input, 'Buy groceries');
    const addButton = getByText('Add');
    fireEvent.press(addButton);

    expect(getByText('Buy groceries')).toBeTruthy();
  });

  it('should delete a task', async () => {
    const { getAllByText } = render(<TodoList />);
    const deleteButton = getAllByText('Delete')[0]; // Assuming the first task has a delete button
    fireEvent.press(deleteButton);
    expect(screen.queryByText('Doctor Appointment')).toBeFalsy()
  });
});