
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { taskActions } from '../store/task-slice';

import ConfirmDelete from './ConfirmDelete';
import classes from './TaskItem.module.css';

const TaskItem = (props) => {
  

    const dispatch = useDispatch();
    const task = useSelector(state => state.task.task);

    const {id, title, dueDate, complete} = props.eachtask;
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);

    const handleComplete = () =>{
        dispatch(taskActions.complete(id));
    };

    const handleEdit = () => {
        dispatch(taskActions.edit(id));
    };

    const handleConfirmDelete = () => {
        setIsConfirmDelete(true);
    }
    const handleDelete = () => {
        dispatch(taskActions.delete(id));
    };

    return (
        <>
          <tbody>
            <tr>
                <td><span>{title}</span></td>
                <td><span>{dueDate}</span></td>
                <td><button onClick={handleComplete} className={classes.buttonStyle}>{complete? 'Mark Complete':'Mark Incomplete'}</button></td>
                <td><button onClick={handleEdit}>edit</button></td>
                <td><button onClick={handleConfirmDelete}>delete</button></td>
            </tr>
          </tbody>  
          {isConfirmDelete &&  <ConfirmDelete deleteHandler={handleDelete} setIsConfirmDelete={setIsConfirmDelete} />}
        </>
      
    )
}

export default TaskItem;