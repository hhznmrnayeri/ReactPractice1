import React from 'react'
import {useRoutes} from 'react-router-dom'
import Header from './components/Header';
import routes from './routes'
export default function App() {
    const router=useRoutes(routes)
  return (
    <>
    <Header></Header>
    {router}
    </>
  )
}
