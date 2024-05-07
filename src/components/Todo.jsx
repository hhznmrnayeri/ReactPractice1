import React, { useEffect } from 'react'
import { TiTick } from "react-icons/ti";
import { IoMdTrash } from "react-icons/io";
export default function Todo(props) {
    useEffect(() => {
        console.log('Todo.js => Mount');
        return () => {
            console.log('Todo.js => UnMount');
        }
    }, [])
    useEffect(() => {
        console.log('Todo.js => Updating');
    })
    const editNoteHandler=(id)=>{
        props.onEdit(id)
    }
    const deleteNoteHandler=(id)=>{
        props.onRemove(id)
    }
    return (
        <div  className={`note flex gap-4 items-center border border-red-600 rounded shadow w-2/5 px-4 py-2  shadow-red-700 mt-4 mx-auto ${props.completed?'completed':'uncompleted'}`}>
            <h2 className='flex-grow text-xl text-gray-950'>{props.title}</h2>
            <button className='w-6 h-6 flex-shrink-0' onClick={() => {editNoteHandler(props.id);}}>
                <TiTick className='w-full h-full text-gray-700'></TiTick>
            </button>
            <button className='w-6 h-6 flex-shrink-0' onClick={() => {deleteNoteHandler(props.id);}}>
                <IoMdTrash className='w-full h-full text-gray-700'></IoMdTrash>
            </button>
        </div>
    )
}