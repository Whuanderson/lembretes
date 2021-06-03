import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {
   
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    if (newTaskTitle.trim() != ""){
      setTasks([...tasks, data])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const taskMark = tasks.filter(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    setTasks(taskMark)
  }

  function handleRemoveTask(id: number) {
    const removeTasks = tasks.filter(task => {
      if (task.id != id){
        return task;
      }
    })
    setTasks(removeTasks)
  }

  function handleDarkMode(darkModeState: boolean) {
    setDarkMode(darkModeState);
  }

  return (
    <View style={{ backgroundColor: darkMode ? "#1F1F1F" : "#FFF", height: '100%'  }}>
      <Header onDarkMode={handleDarkMode} darkModeState={darkMode} />

      <TodoInput addTask={handleAddTask} darkModeState={darkMode} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        darkModeState={darkMode}
      />
    </View>
  )
}