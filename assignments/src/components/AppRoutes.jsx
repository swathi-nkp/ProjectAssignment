
import NavBar from './NavBar'
import { Route , Routes} from 'react-router-dom'
import Home from './Home'
import Task from './Task'
import Task1 from '../pages/day1/Task1'

const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path = "/task" element={<Task/>}/>
        <Route path="/day1task" element={<Task1/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes
