import { useState,useEffect } from "react"

const FetchAPI = () => {

  const [showData,SetshowData] = useState([]) 



  const fetchData = async () =>{
 const savaData = await fetch("https://dummyjson.com/products")
 const response = await savaData.json()
 console.log(response);
 
 SetshowData(response.products)
  }

  useEffect(()=>{
 (async() => {
fetchData()
 })()


 },[])

  

  return (
    <>
      <div className="p-2 font-serif flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Fetch API</h1>
         
         {showData.map((e,i)=>(
<h1 key={i}>{e.title}</h1>
         ))
         
         }

      </div>
    </>
  )
}

export default FetchAPI
