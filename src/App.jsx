import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Bannerlist from './Pages/Admin/Bannerlist'
import Addmovies from './Pages/Admin/Addmovies'
import AdminHome from './Pages/Admin/AdminHome'
import Adminlogin from './Pages/Admin/Adminlogin'
import Login from './Pages/Login'
import Userhome from './Pages/Userhome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbanner from './Pages/Admin/Addbanner'
import Userlist from './Pages/Admin/Userlist'
import Movielist from './Pages/Admin/Movielist'


function App() {
  return (
    <div className='bg-black'>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/userhome' element={<Userhome/>}></Route>
      <Route path='/adminhome' element={<AdminHome/>}></Route>
      <Route path='/adminlogin' element={<Adminlogin/>}></Route>
      <Route path='/addmovies' element={<Addmovies/>}></Route>
      <Route path='/bannerlist' element={ <Bannerlist/>}></Route>
      <Route path='/addbanner' element={<Addbanner/>}></Route>
      <Route path='/userlist' element={<Userlist/>}></Route>
      <Route path='/movielist' element={<Movielist/>}></Route>
      </Routes>
   
      <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App
