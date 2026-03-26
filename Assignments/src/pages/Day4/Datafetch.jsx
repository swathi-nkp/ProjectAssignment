import { useEffect, useState } from 'react'
import { TbToolsKitchen2 } from "react-icons/tb";

const Datafetch = () => {

     const [showData,SetShowData] = useState([])
    // const [alertData,SetalertData] = useState("")

     const data = async ()=>{
        const savaData = await fetch("https://dummyjson.com/recipes")
        const response = await savaData.json()
      //  console.log(response);
        SetShowData(response.recipes)
    }

      useEffect(()=>{
 (async() => {
data()
 })()
},[])

const handleclick = (u) =>{

//SetalertData(u.instructions)
//alert(u.instructions join("\n"))
alert(u.instructions.join("\n"))

}

  return (
    <>
    <div className='flex gap-2 justify-center text-4xl text-center items-center font-serif p-5'>{<TbToolsKitchen2/>}Food Recipes</div>
    <div className="flex justify-center items-center gap-5 flex-wrap">
      {showData.map((e,i)=>(
        <div key={i} className='p-4 bg-cyan-200  flex flex-col justify-around items-center text-center w-90 h-90 gap-2'>
        <h1 className='font-bold text-2xl'>{e.name}</h1>
        <h1>{e.ingredients}</h1>
        <button onClick={()=> handleclick(e)} className='bg-cyan-700 p-2 w-40 text-amber-50 rounded-2xl'>Instruction</button></div> 
     ))}
      </div> 
     {/*  <h1>{alertData}</h1> */}
    </>
  )
}

export default Datafetch
