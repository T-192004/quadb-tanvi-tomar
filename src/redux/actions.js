import {v4 as uuidv4} from 'uuid';

export const addTask = (text, createdTime, timeLimit, completed) => ({
  type: 'ADD_TASK',
  id: uuidv4(),
  text,
  createdTime,
  timeLimit,
  completed
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  id
});

export const editTask = (id, text, timeLimit) => ({
  type: 'EDIT_TASK',
  id,
  text,
  timeLimit
});

export const toggleTaskCompletion = (id) => ({
  type: 'TOGGLE_TASK_COMPLETION',
  id
});

export const loadTasks = (tasks) => ({
  type: 'LOAD_TASKS',
  tasks
});
