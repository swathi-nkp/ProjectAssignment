import React from 'react'
import { useNavigate } from 'react-router-dom'

const Task = () => {

    const navigate=useNavigate()

    const handleclick=()=>{

        navigate("/day1task")
    }


  return (
    <>
      <div>

        <button onClick={handleclick} className='bg-gray-200 p-2 w-40 mx-1 my-4'>Day 01</button>
      </div>
    </>
  )
}

export default Task
