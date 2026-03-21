import { useNavigate } from 'react-router-dom'

const Task = () => {

    const navigate=useNavigate()

  

  return (
    <>
      <div>

        <button onClick={()=>navigate("/day1task")} className='bg-gray-200 p-2 w-40 mx-1 my-4'>Day 01</button>
        <button onClick={()=>navigate("/day2task")} className='bg-gray-200 p-2 w-40 mx-1 my-4'>Day 02</button>
      </div>
    </>
  )
}

export default Task
