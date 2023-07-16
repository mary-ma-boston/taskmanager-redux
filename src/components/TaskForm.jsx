
import React from 'react';
import Draggable from "react-draggable";
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../store/task-slice';

import classes from './TaskForm.module.css';

const TaskForm = () => {
    const dispatch = useDispatch();
    const task = useSelector(state => state.task.task);
    const isAddTask = useSelector(state => state.task.isAddTask);
    const isEditing = useSelector(state => state.task.isEditing);

    const inputTitleHandler = (e) => {
        dispatch(taskActions.changeTitle(e.target.value));
    };

    const inputDueDateHandler = (e) => {
        dispatch(taskActions.changeDueDate(e.target.value));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if(isAddTask && !isEditing) {
            
            const newTask = {...task, id: Date.now().toString()};
            dispatch(taskActions.submitForm(newTask));
        }
        else if(isEditing && !isAddTask) {
            
            dispatch(taskActions.submitEditForm());
        }
        

       dispatch(taskActions.clearTask());
    };

    const resetHandler = () => {
        dispatch(taskActions.clearTask());
    };

    const closeHandler = () => {
        dispatch(taskActions.close());
    };

    const dragHandler = (e, data) => {
        // console.log('event type', e.type);
        // console.log({e, data});
    };

    return (
        <Draggable onDrag={dragHandler}>
            <div className={classes.formContainer} >
                <button className={classes.closeButton} onClick={closeHandler}>close</button>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Task Title</label>
                        <input name='title' type='text' value={task.title} onChange={inputTitleHandler}/>
                    </div>
                    <div>
                        <label>Due Date</label>
                        <input name='dueDate' type='text' value={task.dueDate} onChange={inputDueDateHandler}/>
                    </div>
                    <div className='buttonStyle'>
                        <button type='button' onClick={resetHandler}>RESET</button>
                        <button type='submit'>OK</button>
                    </div>       
                </form>
             </div>  
        </Draggable>   
    )
}

export default TaskForm;