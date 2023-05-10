import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Service from '../Pages/Service'
import Menu from '../Pages/Menu'
import Contact from '../Pages/Contact'
import BookTable from '../Pages/BookTable'
import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer'

const MyRoute = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/booking' element={<BookTable/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default MyRoute