import React from 'react'
import {useRoutes} from 'react-router-dom'
import Header from './components/Header';
import routes from './routes'
export default function App() {
    const router=useRoutes(routes)
  return (
    <>
    <Header></Header>
    
    <div className='flex items-start gap-14 mt-6 px-16 w-full'>
      <div className='flex items-center gap-4 justify-center w-full'>
        <h3 className='font-extrabold text-xl bg-red-50 px-4 py-2 rounded text-red-800'>Nasa </h3>
        <p className='text-sm text-red-800'>get data from nasa api</p>
      </div>
      <div className='flex items-center gap-4 justify-center w-full'>
        <h3 className='font-extrabold text-xl bg-red-50 px-4 py-2 rounded text-red-800'>TodoList </h3>
        <p className='text-sm text-red-800'>create TodoList with MockAPI</p>
      </div>
    </div>
    {router}
    </>
  )
}
