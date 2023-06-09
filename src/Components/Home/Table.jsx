import React from 'react'

const Table = () => {
  return (
    <>
    <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
  <div className="row g-0">
    <div className="col-md-6">
      <div className="video">
        <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
          <span />
        </button>
      </div>
    </div>
    <div className="col-md-6 bg-dark d-flex align-items-center">
      <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
        <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
        <h1 className="text-white mb-4">Book A Table Online</h1>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating date" id="date3" data-target-input="nearest">
                <input type="date" className="form-control" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datepicker" />
                <label htmlFor="datetime">Choose Date </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <select className="form-select" id="select1">
                  <option value={1}>People 1</option>
                  <option value={2}>People 2</option>
                  <option value={3}>People 3</option>
                  <option value={4}>People 4</option>
                  <option value={5}>People 5</option>
                  <option value={6}>People 6</option>
                </select>
                <label htmlFor="select1">No Of People</label>
              </div>
            </div>
            <div className="form-floating date" id="date3" data-target-input="nearest">
                <input type="time" className="form-control" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="timepicker" />
                <label htmlFor="datetime">Choose Time</label>
              </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Special Request" id="message" style={{height: 100}} defaultValue={""} />
                <label htmlFor="message">Special Request</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Table