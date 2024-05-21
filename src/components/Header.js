import React from 'react'
import {NavLink} from 'react-router-dom'
import './../App.css'
export default function Header() {
  return (
    <>
    <div className='flex items-center justify-center gap-4 p-4 child:bg-red-300 child:rounded child:border child:border-red-500 child:shadow-red-800 child:px-4 child:py-2 child:text-red-900'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/nasa'>Nasa</NavLink>
        <NavLink to='/todolist'>TodoList</NavLink>
    </div>
    </>
  )
}
