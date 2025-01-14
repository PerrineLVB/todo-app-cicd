// components/TodoItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.css'; 
import Checkbox from 'expo-checkbox';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View style={styles['todo-item']}>
       <Checkbox value={task.completed} onValueChange={() => toggleCompleted(task.id)} testID='checkbox' data-testid="todo-item" />

      <Text style={[styles['todo-item-text'], task.completed && styles.completed]}>
        {task.text}
      </Text>
      <TouchableOpacity
        style={styles['delete-button']}
        onPress={() => deleteTask(task.id)}
      >
        <Text style={{ color: 'black' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}