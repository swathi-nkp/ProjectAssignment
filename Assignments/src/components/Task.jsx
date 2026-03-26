import { useNavigate } from 'react-router-dom'

const Task = () => {

    const navigate=useNavigate()

  

  return (
    <>
      <div className='flex flex-col'>

        <button onClick={()=>navigate("/day1task")} className='bg-green-500 p-2 w-40 mx-1 my-4'>Day 01</button>
        <button onClick={()=>navigate("/day2task")} className='bg-green-500 p-2 w-40 mx-1 my-4'>Day 02</button>
        <button onClick={()=>navigate("/day3task")} className='bg-green-500 p-2 w-40 mx-1 my-4'>Day 03</button>
        <button onClick={()=>navigate("/day4task")} className='bg-green-500 p-2 w-40 mx-1 my-4'>Day 04</button>
      </div>
    </>
  )
}

export default Task
