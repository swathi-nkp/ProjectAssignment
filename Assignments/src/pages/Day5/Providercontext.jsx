import { useState } from 'react'
import Timercontext from './Timercontext'

const Providercontext = ({children}) => {

const [Counter,SetCounter]=useState(0)

const handleclick = () =>{

    SetCounter(Counter+1)
}
  return (
    <>
      <Timercontext.Provider value={{Counter,handleclick}}>
        {children}
      </Timercontext.Provider>
    </>
  )
}

export default Providercontext
