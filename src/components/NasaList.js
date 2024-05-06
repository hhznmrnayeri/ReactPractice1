import React from 'react'
import { useEffect, useState } from 'react'
import './../App.css'
import Nasa from './Nasa'
export default function NasaList() {
    const [nasaArray,setNasaArray]=useState([])
    const [count,setCount]=useState(0)
    const getData=async ()=>{
      if(count>0){
        let res= await fetch(`https://api.nasa.gov/planetary/apod?api_key=Q5GRsWcW4ZCKNQlkBAbBU9g9RaKOedI5FU7XP7GR&count=${count}`)
        let data=await res.json()
        setNasaArray(data)
      }else{
        setNasaArray([])
      }
    }
    const countHandler=(event)=>{
      setCount(event.target.value)
    }
    useEffect(()=>{
      },[nasaArray])
    useEffect(()=>{
      },[count])
  return (
<>
    <div className='flex items-center justify-center my-10 gap-4'>
      <input type="number" className='p-4 border border-red-700 rounded outline-none' value={count} onChange={(event)=>countHandler(event)}/>
    <button className='bg-red-600 text-white p-4 rounded' onClick={()=>getData()}>data</button>
    </div>
    {nasaArray.length? nasaArray.map((item,index)=>(
        <Nasa {...item} key={index}></Nasa>
    )):<div></div>}
</>
  )
}