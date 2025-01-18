// components/TodoItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View style={styles.todoItem}>
      <Checkbox value={task.completed} onValueChange={() => toggleCompleted(task.id)} testID='checkbox' />

      <Text style={[styles.todoItemText, task.completed && styles.completed]}>
        {task.text}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(task.id)}
        testID='delete'
      >
        <Text style={{ color: 'black' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', /* Align items vertically in the center */
    marginBottom: '8px',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  todoItemText: {
    flex: 1, /* Allow the text to take up remaining space */
    marginRight: "8px",
    color: "#333"
  },
  completed: {
    textDecoration: "line-through",
    color: "#888"
  },
  deleteButton: {
    backgroundColor: "#ff6347", /* Tomato color */
    color: "#fff",
    padding: "4px 8px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
});
