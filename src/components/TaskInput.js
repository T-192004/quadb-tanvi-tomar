import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './Task.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() && timeLimit.trim()) {
      dispatch(addTask(task, new Date().toLocaleString(), timeLimit, false));
      setTask('');
      setTimeLimit('');
    }
  };

  return (
    <div className='task-input-container'>
      <h2>Create a To-Do Task</h2>
      <input
        type="text"
        value={task}
        required
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <input
        type="text"
        value={timeLimit}
        required
        onChange={(e) => setTimeLimit(e.target.value)}
        placeholder="Time limit (e.g., 2 hours)"
      />
      <button1 onClick={handleAddTask}>Add Task</button1>
    </div>
  );
};

export default TaskInput;
