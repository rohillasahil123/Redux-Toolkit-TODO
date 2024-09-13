import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
import {addTodo} from "../../Feature/Reduser"


const Addtodo = () => {
    
    const [input , setInput]  =  useState("")
    const dispatch = useDispatch()


        const handelChange = (e)=>{
            const {name , value} = e.target
            setInput(value)
            console.log(input)
        }

        const handleSubmit = (e) => {
            e.preventDefault(); 
            dispatch(addTodo(input))
            setInput('')
            
        };


  return (
    <>
        <div>
            <h1 className='font-bold text-4xl  text-white  text-center mt-4'>
                Todo App
            </h1>
        </div>
        <div className='text-center mt-12 '>
            <form action="" >
                <div className='w-full space-x-8 '>
                    <input type="text" 
                    className='h-[35px] w-[60%] rounded focus:border-red-400 text-xl font-medium'
                    placeholder='Enter Your Todo'
                     name='todo'
                     value={input}
                     onChange={handelChange}/>
                    
                    <button className='w-[10%] rounded-lg font-bold h-[40px] bg-green-400' onClick={handleSubmit}>Add-Todo</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Addtodo