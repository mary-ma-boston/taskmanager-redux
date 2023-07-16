import {createSlice} from '@reduxjs/toolkit';

const initialTaskState = {
    taskList: [],
    isAddTask: false,
    isEditing: false,
    isTaskValid: true,
    task: {
        id: '',
        title: '',
        dueDate: '',
        complete: false,
    },
};

const taskSlice = createSlice({
    name: 'task',
    initialState: initialTaskState,
    reducers: {
        complete: (state, action)=>{
            const completeIndex = state.taskList.findIndex(item => item.id === action.payload);
            state.taskList[completeIndex].complete = !state.taskList[completeIndex].complete;
        },
        edit: (state, action) => {
            state.isEditing = true;
            const editIndex = state.taskList.findIndex(item=>item.id === action.payload);
            const editTitle = state.taskList[editIndex].title;
            const editDueDate = state.taskList[editIndex].dueDate;
            state.task.title = editTitle;
            state.task.dueDate = editDueDate;
            state.task.id = action.payload;

            // state.editId = action.payload;
        },
        delete: (state, action) => {
            const newTaskList =  state.taskList.filter(item => item.id !== action.payload);
            state.taskList = newTaskList;
        },
        submitForm: (state, action) => {
            state.isTaskValid = true;
            if(state.task.title===''|| state.task.dueDate==='') {
                state.isTaskValid = false;
                return 
            }
          
            state.taskList.push(action.payload);
            state.isAddTask = false;
            state.isTaskValid = true;
        },
        submitEditForm: (state, action) => {

            if(state.task.title === '' || state.task.dueDate === '') {
                state.isTaskValid = false;
                return 
            }
            
            const newDeleteTaskList = state.taskList.filter((item)=>item.id !== state.task.id);
            newDeleteTaskList.push(state.task);
            state.taskList = newDeleteTaskList;
            state.isEditing = false;
            state.isTaskValid = true;
        },
        close: (state)=>{
            state.isAddTask = false;
            state.isEditing = false;
        },
        addTask: (state)=>{
            state.isAddTask = true;
        },
        changeTitle: (state, action) => {
            state.task.title = action.payload;
        },
        changeDueDate: (state, action) => {
            state.task.dueDate = action.payload;
        },
        clearTask: (state)=>{
            state.task = {
                id: '',
                title: '',
                dueDate: '',
                complete: false,
            } 
        },
    } 
});

export const taskActions = taskSlice.actions;

export default taskSlice;