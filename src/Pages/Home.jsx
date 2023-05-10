import React from 'react'

import HService from '../Components/Home/HService'
import Team from '../Components/Home/Team'
import Table from '../Components/Home/Table'
import Review from '../Components/Home/Review'
import Footer from '../Components/Common/Footer'
import Navbar from '../Components/Common/Navbar'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
<div className="container-xxl bg-white p-0">
<Navbar/>
<div className="container-xxl py-5 bg-dark hero-header mb-5">
    <div className="container my-5 py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
          <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <NavLink to='/booking' className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</NavLink>
        </div>
        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
          <img className="img-fluid" src="img/hero.png" alt="" />
        </div>
      </div>
    </div>
  </div>
<HService/>
<Team/>
<Table/>
<Review/>
</div>
    </>
  )
}

export default Home