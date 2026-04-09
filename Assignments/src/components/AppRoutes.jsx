
import NavBar from './NavBar'
import { Route , Routes} from 'react-router-dom'
import Home from './Home'
import Task from './Task'
import Task1 from '../pages/Day1/Task1'
import FetchAPI from '../pages/Day2/FetchAPI'
import CandidatesData from '../pages/Day3/CandidatesData'
import Datafetch from '../pages/Day4/Datafetch'
import Providercontext from '../pages/Day5/Providercontext'
import Timer from '../pages/Day5/Timer'
import Buttons from '../pages/Day6/Buttons'
import ProviderContext from '../pages/Day6/ProviderContext'
const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path = "/task" element={<Task/>}/>
        <Route path="/day1task" element={<Task1/>}/>
        <Route path = "/day2task" element = {<FetchAPI/>}/>
        <Route path = "/day3task" element ={<CandidatesData/>}/>
        <Route path = "/day4task" element ={<Datafetch/>}/>
        <Route path ="/day5task" element ={<Providercontext><Timer/></Providercontext>}/>
        <Route path ="/day6task" element ={<ProviderContext><Buttons/></ProviderContext>}/>
        <Route path = "/day7task" element = {<ref/>}></Route>
      </Routes>
    </>
  )
}

export default AppRoutes
