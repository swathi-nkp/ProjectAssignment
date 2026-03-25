import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <>
     <div className="bg-gray-50 flex  justify-between text-2xl font-serif items-center">
        
        <img src="/Ass2.jfif" className="w-20 h-20"/>
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
