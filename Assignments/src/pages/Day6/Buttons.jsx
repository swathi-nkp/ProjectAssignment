import { useContext } from 'react'
import ButtonContext from './ButtonContext'

const Buttons = () => {

    const {Theme ,toggleMode ,Language,toggleLan } = useContext(ButtonContext)

  return (
   <>
    <div>
      <div className = {`${Theme === "light"? "bg-white":"bg-black"}`}></div>
      <button onClick={toggleMode}> Change Mode </button>
      <button onClick={toggleLan}> Change Language </button>
      <p>{Language==="tamil"?"vannakam":"welcome"}</p>
      
    </div>
   </>
  )
}

export default Buttons
