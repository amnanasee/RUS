import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      
      <video
        className="header-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Header_video.mp4" type="video/mp4" />
      </video>

      <div className="header-contents">
        <h2>Precision Power Testing for Industrial Infrastructure </h2>
        <p>
          Heavy-duty insulation testers and clamp meters engineered for high-voltage environments and predictive maintenance
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  )
}

export default Header
