import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion, loadTasks } from '../redux/actions';
import Popup from 'reactjs-popup';
import { FaRegSmileBeam } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import 'reactjs-popup/dist/index.css';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [editTaskData, setEditTaskData] = useState({ id: null, text: '', timeLimit: '' });
    console.log(tasks);
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
          dispatch(loadTasks(storedTasks));
        }
      }, [dispatch]);
    
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // console.log("SET");
      }, [tasks]);
    
      const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
      };
    const handleEditTask = (id, text, timeLimit) => {
      dispatch(editTask(id, text, timeLimit));
      setEditTaskData({ id: null, text: '', timeLimit: '' });
    };
  
    const handleToggleCompletion = (id) => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      dispatch(toggleTaskCompletion(id));
    };
  
    const openEditPopup = (task) => {
      setEditTaskData({ id: task.id, text: task.text, timeLimit: task.timeLimit });
    };
  
    const closeEditPopup = () => {
      setEditTaskData({ id: null, text: '', timeLimit: '' });
    };
  return (
    <div className='task-list-contianer'>
    {tasks.length === 0 ?  <h5>No Tasks are Added</h5> : (<ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <div3 >
            <button3 onClick={() => handleToggleCompletion(task.id)}>
                {task.completed ? <FaRegSmileBeam className='smile-icons' /> : ''}
            </button3>
            <p><span>{task.text}</span> <br/>{new Date(task.createdTime).toLocaleString()} <br/> {task.timeLimit}</p>
            </div3>
            <div>
            <button4 onClick={() => openEditPopup(task)}><MdEdit className='icons' /></button4>
            <button4 onClick={() => handleDeleteTask(task.id)}><MdDelete className='icons' /></button4>
            </div>
          </li>
        ))}
      </ul>)}
      {editTaskData.id !== null && (
        <Popup open={true} onClose={closeEditPopup} modal>
          <div>
            <input
              type="text"
              value={editTaskData.text}
              onChange={(e) => setEditTaskData({ ...editTaskData, text: e.target.value })}
            />
            <input
              type="text"
             
              value={editTaskData.timeLimit}
              onChange={(e) => setEditTaskData({ ...editTaskData, timeLimit: e.target.value })}
            />
            <button onClick={() => handleEditTask(editTaskData.id, editTaskData.text, editTaskData.timeLimit)}>
              Save
            </button>
            <button onClick={closeEditPopup}>Cancel</button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default TaskList;
