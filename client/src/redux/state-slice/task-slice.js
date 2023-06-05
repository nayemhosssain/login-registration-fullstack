import {createSlice} from "@reduxjs/toolkit";
export const taskSlice=createSlice({
    name:'task',
    initialState:{
        All:[],
        Completed:[],
        Progress:[],
        Canceled:[]
    },
    reducers:{
        SetNewTask:(state,action)=>{
            state.All=action.payload
        },
        SetCompletedTask:(state,action)=>{
            state.Completed=action.payload
        },
        SetProgressTask:(state,action)=>{
            state.Progress=action.payload
        },
        SetCanceledTask:(state,action)=>{
            state.Canceled=action.payload
        }

    }
})
export  const {SetNewTask,SetCompletedTask,SetProgressTask,SetCanceledTask}=taskSlice.actions;
export default  taskSlice.reducer;
