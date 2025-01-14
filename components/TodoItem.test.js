// TodoItem.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<TodoItem task={{ text: 'Buy milk', completed: false }} />);
    expect(getByText('Buy milk')).toBeTruthy();
    expect(getByTestId('checkbox').value).toBeFalsy(); // Checkbox is not checked by default
  });

  it('renders text as strikethrough when completed is true', () => {
    const { getByText } = render(<TodoItem task={{ text: 'Buy milk', completed: true }} />);
    expect(getByText('Buy milk')).toHaveStyle('text-decoration: line-through');
  });

  it('calls toggleCompleted on checkbox click', () => {
    const mockToggleCompleted = jest.fn();
    const { getByTestId } = render(<TodoItem task={{ text: 'Buy milk', completed: false }} toggleCompleted={mockToggleCompleted} />);
    fireEvent.press(getByTestId('checkbox'));
    expect(mockToggleCompleted).toHaveBeenCalledTimes(1);
  });

  it('calls deleteTask on delete button press', () => {
    const mockDeleteTask = jest.fn();
    const { getByText } = render(<TodoItem task={{ text: 'Buy milk', completed: false }} deleteTask={mockDeleteTask} />);
    fireEvent.press(getByText('Delete'));
    expect(mockDeleteTask).toHaveBeenCalledTimes(1);
  });
});