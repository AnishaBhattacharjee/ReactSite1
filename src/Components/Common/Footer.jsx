import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="container-xxl position-relative p-0">

        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                <NavLink className="btn btn-link" to='/about'>About Us</NavLink>
                <NavLink className="btn btn-link" to='/contact'>Contact Us</NavLink>
                <NavLink className="btn btn-link" to='/booking'>Reservation</NavLink>
                <NavLink className="btn btn-link" to=''>Privacy Policy</NavLink>
                <NavLink className="btn btn-link" to=''>Terms &amp; Condition</NavLink>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                <p>09 AM - 09 PM</p>
                <h5 className="text-light fw-normal">Sunday</h5>
                <p>10 AM - 08 PM</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <form>
                  <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                    <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="email" placeholder="Your email" />
                    <button type="submit" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  © <a>Grill n Eat</a>, All Right Reserved.
                  Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href>Home</a>
                    <a href>Cookies</a>
                    <a href>Help</a>
                    <a href>FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
      </div>

    </>
  )
}

export default Footer