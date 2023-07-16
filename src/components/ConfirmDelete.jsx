import Draggable from 'react-draggable';


import classes from './ConfirmDelete.module.css';

const ConfirmDelete = (props) => {


    const handleDelete = () => {
        props.deleteHandler();
    };

    const handleCancelDelete = () => {
        props.setIsConfirmDelete(false);
    }

    return (
        <Draggable>
             <div className={classes.deleteConfirm}>
                <p>Are you sure to delete the task?</p>
                <button onClick={handleDelete}>Yes</button>
                <button onClick={handleCancelDelete}>No</button>
            </div>
        </Draggable>  
    )
}

export default ConfirmDelete;