import React from 'react'
import { NavLink } from 'react-router-dom'

const BHead = () => {
  return (
    <>
     <div class="container-xxl py-5 bg-dark hero-header mb-5">
        <div class="container text-center my-5 pt-5 pb-4">
          <h1 class="display-3 text-white mb-3 animated slideInDown">Book Your Table</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center text-uppercase">
              <li class="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
              <li class="breadcrumb-item text-white active" aria-current="page">Booking</li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  )
}

export default BHead