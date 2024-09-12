import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "you are the best" }],
};


export const todoList = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo : (state , action)=>{
            const todo = {  id:nanoid ,text: action.payload }
            state.todos.push(action.payload)
        },
        removeTodo:(state , action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})


export const  {addTodo , removeTodo} = todoList.actions

export default todoList.reducer