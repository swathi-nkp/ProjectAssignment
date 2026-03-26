import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <>
     <div className="bg-gray-100 flex  justify-between font-serif items-center">
        
        <img src="/Ass2.jfif" className="w-15 h-15"/>
        <div>Assignments</div>
        <div className="flex gap-15 mx-10 ">
         <NavLink to ="/" className = {({ isActive }) =>
              isActive
                ? "bg-green-500 p-2 rounded-2xl"
                : "p-2"
            }>Home</NavLink>
         <NavLink to = "/task" className = {({ isActive }) =>
              isActive
                ? "bg-green-500 p-2 rounded-2xl"
                : "p-2"
            }>Task</NavLink>
        </div>
      </div>
    </>
  )
}

export default NavBar
