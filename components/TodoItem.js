// components/TodoItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import the styles
import Checkbox from 'expo-checkbox';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View style={styles['todo-item']}>
       <Checkbox value={task.completed} onValueChange={() => toggleCompleted(task.id)} />

      <Text style={[styles['todo-item-text'], task.completed && styles.completed]}>
        {task.text}
      </Text>
      <TouchableOpacity
        style={styles['delete-button']}
        onPress={() => deleteTask(task.id)}
      >
        <Text style={{ color: '#fff' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}