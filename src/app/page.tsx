'use client'
import { useState } from "react"

export default function usestate() {
  const[count,setCount]= useState(0)

  return(
    <div className="flex flex-col justify-center items-center min-h-screen bg-lime-500">
    <div className="text-white font-bold text-2xl mb-7"> {count}</div>
    <button className="text-xl font-semibold  bg-white px-5 py-2 border-[3px] border-black rounded-lg" onClick={() =>{setCount(count+1)}}>Hello peeps please click me</button>
    </div>

  )}