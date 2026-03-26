import { useNavigate } from 'react-router-dom'

const Task = () => {

    const navigate=useNavigate()

  const buttonstyle = {
    backgroundColor: "#22c55e",
    padding: "6px",
    width: "140px",
    margin:"5px",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"

  }

  return (
    <>
      <div className='flex flex-col'>

        <button style={buttonstyle} onClick={()=>navigate("/day1task")} >Day 01</button>
        <button style={buttonstyle} onClick={()=>navigate("/day2task")} >Day 02</button>
        <button style={buttonstyle} onClick={()=>navigate("/day3task")} >Day 03</button>
        <button style={buttonstyle} onClick={()=>navigate("/day4task")} >Day 04</button>
        <button style={buttonstyle} onClick={()=>navigate("/day5task")} >Day 05</button>
      </div>
    </>
  )
}

export default Task
