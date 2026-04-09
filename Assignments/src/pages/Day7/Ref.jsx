import  { useRef, useState } from 'react'

const Ref = () => {

    const [ text , Settext ] = useState("")
    const [stopped,Setstopped] = useState(false)
    const stopRef = useRef(null) 

    const handlechange = (e) =>{
    
        Settext(e.target.value)
        Setstopped(false)

    }

    clearTimeout(stopRef.current);

    stopRef.current = setTimeout (() =>{

        Setstopped(true)
    },2000)




  return (
    <>
    <div>
<input type="text" value={text} onChange={handlechange}/>

    </div>
    </>
  )
}

export default Ref
