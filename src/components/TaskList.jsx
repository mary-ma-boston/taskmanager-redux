import  {useSelector} from 'react-redux';


import classes from './TaskList.module.css';

import TaskItem from './TaskItem';


const TaskList = () => {
    
    const tasks = useSelector(state => state.task.taskList);
   
    return (
        <> 
        {tasks.length === 0? (<p>No tasks available.</p>):(
            <table>
                {
                    tasks.map(eachtask => {
                        return (
                            <TaskItem 
                                key={eachtask.id} 
                                eachtask={eachtask}
                            />
                        )
                    })
                }
            </table>
        )}
        </>  
    )
}

export default TaskList;