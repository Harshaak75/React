import React, { useState } from 'react'
import { usetodo } from '../Context';

function TodoForm() {
    const [todo, settodo] = useState("");

    const {addtodo} = usetodo();

    const add = (e) =>{
        e.preventDefault();
        if(!todo){
            return;
        }
        else {
            addtodo({todo, completed: false});
            settodo("");
        }   
    }

  return (
    <form onSubmit={add} className='flex'>
        <input type="text"
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        placeholder='Add the todo list'
        value={todo}
        onChange={(e)=>settodo(e.target.value)} 
        />
        <button
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
        type='submit'>Add</button>
    </form>
  )
}

export default TodoForm