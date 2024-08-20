import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../type";

// props
interface TodoState{
    todoList:Todo[];
}
// end

const initialState:TodoState = {
    todoList:[],
}

export const todoSlice = createSlice({
    // name
    name:"todo",
    // initialState
    initialState,
    // reducers
    reducers:{
        // addTodo
        addTodo:(state, action : PayloadAction<Todo>)=>{
            state.todoList.push(action.payload)

        },
        // deleteTodo
        deleTodo:(state, action: PayloadAction<string>)=>{

            state.todoList = state.todoList.filter((item) => item?._id !== action.payload)
        },

        // remove Todo

        removeTodo:(state) =>{
            state.todoList = []
        }

    }
})

export const {addTodo, deleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer


