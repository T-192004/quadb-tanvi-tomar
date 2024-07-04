import React, { useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux';
import { loadTasks } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(loadTasks(tasks));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>To-Do Manager</h1>
      <div className='task-contianers'>
        <TaskInput />
        <TaskList />
      </div>
      
    </div>
  );
}

export default App;
