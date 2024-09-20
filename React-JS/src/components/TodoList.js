import React, { useEffect, useState } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import Todo from './Todo';
export default function TodoList() {
    const [title,setTitle]=useState('');
    const [todoList,setTodoList]=useState([]);
    const [getTodoList,setGetTodoList]=useState(false);
    const generateTodo = async(event)=>{
        event.preventDefault();
        const newTask = {
            title,
            completed: false,
        };
        await fetch('https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(newTask)
          }).then(res => res.json())
          setTitle('');
        setGetTodoList(prev=>!prev);
        getAllTodo()
    }
    const editTodoHandler=async(todoId)=>{
        let mainTodo=todoList.find(todo=>todo.id===todoId);
        let completedValue=!mainTodo.completed;
        await fetch(`https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks/${todoId}`, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({completed: completedValue})
            }).then(res => { res.json();
        setGetTodoList(prev=>!prev);
        getAllTodo()
        })
    }
    const deleteTodoHandler= async(noteId)=>{
        await fetch(`https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks/${noteId}`, {
            method: 'DELETE',
            }).then(res => { res.json();
            })
        setGetTodoList(prev=>!prev);
        getAllTodo()
    }
    const getAllTodo=async()=>{
        const res= await fetch('https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks', {
            method: 'GET',
            headers: {'content-type':'application/json'},
        });
        const data= await res.json();
        setTodoList(data);
    }
    useEffect(() =>{
        getAllTodo()
    },[getTodoList])
    return (
        <div className='container'>
            <form className='flex border items-center justify-between border-gray-400 shadow-md rounded outline-none mx-auto mt-6 w-7/12 py-3 pr-1 pl-4' onSubmit={generateTodo}>
                <input type="text" className="outline-none border-none w-full h-full text-xl" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                <button className="border-l border-l-gray-600 flex items-center justify-center p-1" type="submit"><FaPencilAlt></FaPencilAlt></button>
            </form>
            {todoList.map((note,index)=>(
                <Todo key={index+1} {...note} onRemove={deleteTodoHandler} onEdit={editTodoHandler}/>
            ))}
        </div>
    )
}