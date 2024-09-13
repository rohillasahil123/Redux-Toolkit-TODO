import React, { useState } from "react";
import { MdDeleteOutline, MdOutlinePublishedWithChanges } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo , updateTodo } from "../../Feature/Reduser";

const TodoList = () => {
  const[edittext , setEdittext] = useState('')
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch();

  const handelUpdate =( id , newtext)=>{
    const newText = prompt("enter new text" , edittext)
    if (newText){
    dispatch(updateTodo({id , text : newtext}))
    }
  }






  return (
    <>
      <h1 className="font-bold text-4xl  text-white  text-center mt-4">
        Todo List
      </h1>
      <div className="w-full text-center flex flex-col  items-center ">
        {todos.map((todo) => (
          <div key={todo.id} className="flex w-full  justify-center">
            <div className="h-[35px] w-[60%] rounded bg-white mt-2  focus:border-red-400 text-xl font-medium">
              {todo.text}
            </div>
            <div
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-600 w-[4%] flex justify-center  rounded font-bold mt-2 h-[35px] ml-2 hover:cursor-pointer "
            >
              <MdDeleteOutline className="h-full w-[30px] " />
            </div>
            <div className="bg-teal-600 w-[4%] flex justify-center  rounded font-bold mt-2 h-[35px] ml-4 hover:cursor-pointer"
            onClick={ ()=> handelUpdate (todo.id , newText)}>
              <MdOutlinePublishedWithChanges className="h-full w-[30px] " />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
