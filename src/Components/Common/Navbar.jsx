import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
<div className="container-xxl position-relative p-0">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
    <a href className="navbar-brand p-0">
      <h1 className="text-primary m-0"><i className="fa fa-utensils me-3" />Grill n Eat</h1>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0 pe-4">
        <Link to="/" className="nav-item nav-link active">Home</Link>
        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
        <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
        <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
      </div>
      <NavLink to='/booking' className="btn btn-primary py-2 px-4">Book A Table</NavLink>
    </div>
  </nav>
</div>
    </>
  )
}

export default Navbar