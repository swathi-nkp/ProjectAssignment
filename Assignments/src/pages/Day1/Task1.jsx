   import { useState } from "react"

const Task1 = () => {

  const [Formdata,setFormdata] = useState({username:"",userage:"",useremail:""})
  const [Showdata,setShowdata] = useState("")
  

const handlechange = (e) =>{
  const inputname = e.target.name
  const inputvalue = e.target.value
 
//console.log(inputname);

setFormdata ({...Formdata,[inputname]:inputvalue});



  
}

const handleclick = () =>{
  setShowdata(Formdata)
  console.log(Formdata);
  
}



  return (
    <>
    
    <div className="flex items-center justify-center my-15">
    <div className="flex flex-col justify-center items-center bg-gray-200 w-100 h-100 gap-2 font-serif">
      <h1 className="text-large font-bold">Fill the form</h1><br />
      <input type="text" name="username" placeholder="Enter your name"onChange={handlechange} className="bg-gray-300  w-50 text-black p-1 rounded"/>
      <input type="number" name="userage" placeholder="Enter your age" onChange={handlechange} className="bg-gray-300  w-50 text-black p-1"/>
      <input type="email" name="useremail" placeholder="Enter your email" onChange={handlechange} className="bg-gray-300  w-50 text-black p-1 rounded" />
      
      <button onClick={handleclick} className="p-2 bg-gray-300 w-50 my-3 text-gray-800">Submit</button>
      <h1>{Showdata.username}</h1>
      <h1>{Showdata.userage}</h1>
      <h1>{Showdata.useremail}</h1>

    </div>
</div>
    </>
  )
}

export default Task1
