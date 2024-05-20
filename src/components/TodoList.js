import React, { useEffect, useState } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoMdTrash } from "react-icons/io";
// import Todo from './Todo';
export default function TodoList() {
    const [title,setTitle]=useState('');
    const [notes,setNotes]=useState([]);
    const [getNotes,setGetNotes]=useState(false);
    const generateNote = async(event)=>{
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
        setGetNotes(prev=>!prev);
        fetchData()
    }
    const editNoteHandler=async(noteId)=>{
        let mainNote=notes.find(note=>note.id===noteId);
        let completedValue=!mainNote.completed;
        await fetch(`https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks/${noteId}`, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({completed: completedValue})
            }).then(res => { res.json();
        setGetNotes(prev=>!prev);
        fetchData()
        })
    }
    const deleteNoteHandler= async(noteId)=>{
        await fetch(`https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks/${noteId}`, {
            method: 'DELETE',
            }).then(res => { res.json();
            })
        setGetNotes(prev=>!prev);
        fetchData()
    }
    const fetchData=async()=>{
        const res= await fetch('https://662ee13543b6a7dce30def1a.mockapi.io/api/v1/tasks', {
            method: 'GET',
            headers: {'content-type':'application/json'},
        });
        const data= await res.json();
        setNotes(data);
    }
    useEffect(() =>{
        fetchData()
    },[getNotes])
    useEffect(() =>{
    },[notes])
    return (
        <div className='container'>
            <form className='flex border items-center justify-between border-gray-400 shadow-md rounded outline-none mx-auto w-7/12 py-3 pr-1 pl-4' onSubmit={generateNote}>
                <input type="text" className="outline-none border-none w-full h-full text-xl" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                <button className="border-l border-l-gray-600 flex items-center justify-center p-1" type="submit"><FaPencilAlt></FaPencilAlt></button>
            </form>
            {notes.map((note,index)=>(
                // <Todo key={index+1} {...note} onRemove={deleteNoteHandler(note.id)} onEdit={editNoteHandler(note.id)}/>
                <div key={index+1} className={`note flex gap-4 items-center border border-red-600 rounded shadow w-2/5 px-4 py-2  shadow-red-700 mt-4 mx-auto ${note.completed?'completed':'uncompleted'}`}>
                    <h2 className='flex-grow text-xl text-gray-950'>{note.title}</h2>
                    <button className='w-6 h-6 flex-shrink-0' onClick={() => {editNoteHandler(note.id);}}>
                        <TiTick className='w-full h-full text-gray-700'></TiTick>
                    </button>
                    <button className='w-6 h-6 flex-shrink-0' onClick={() => {deleteNoteHandler(note.id);}}>
                        <IoMdTrash className='w-full h-full text-gray-700'></IoMdTrash>
                    </button>
                </div>
            ))}
        </div>
    )
}