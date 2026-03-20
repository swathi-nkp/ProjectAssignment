import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <>
     <div className="bg-violet-300 p-5 flex  justify-between text-2xl font-serif items-center">
        <div>Assignment</div>

        <div className="flex gap-15 mx-10 ">
         <NavLink to ="/" className={({isActive})=>isActive && "bg-violet-400 p-1 rounded-2xl"}>Home</NavLink>
         <NavLink to = "/task" className={({isActive})=>isActive && "bg-violet-400 p-1 rounded-2xl "}>Task</NavLink>
        </div>
      </div>
    </>
  )
}

export default NavBar
