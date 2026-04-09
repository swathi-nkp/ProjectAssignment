import{ useContext } from 'react'
import Timercontext from './Timercontext'

const Timer = () => {
    const {Counter,handleclick}=useContext(Timercontext)
  return (    
    <>
    <div className='justify-center items-center flex my-35'>
    <div className='p-2 w-50 h-60 bg-amber-400 flex flex-col justify-center gap-4 items-center text-center '>
      <p className='font-bold font-serif'>UseContext( )</p>
      <p>{Counter}</p>
      <button onClick={handleclick}className='p-2 bg-black text-white rounded'>increase</button></div>
    </div>
    </>
  )
}

export default Timer
