import React from 'react';
import  {useSelector, useDispatch} from 'react-redux';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import './App.css';
import { taskActions } from './store/task-slice';


function App() {
  
  const dispatch = useDispatch();

  const isTaskValid = useSelector(state => state.task.isTaskValid);
  const isAddTask = useSelector(state => state.task.isAddTask);
  const isEditing = useSelector(state => state.task.isEditing);

  const onAddTask = () => {
   
    dispatch(taskActions.addTask());
    
  };

  

  return (
    <div className='mainContainer'>
      <div className='container'>
        <h1>Task Manager</h1>
        <button className='addButton' onClick={onAddTask}>Add Task</button>
        <TaskList />
        {!isTaskValid && <p>please input a valid task</p>}
      </div>
      {isAddTask && <TaskForm /> }
      {isEditing && <TaskForm />} 
  </div>
  );
}

export default App;
