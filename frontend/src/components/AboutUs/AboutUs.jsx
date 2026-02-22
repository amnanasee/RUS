import React from 'react'
import { assets } from '../../assets/assets'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutus' id='about'>
        <div className="aboutus_box">
            <div className="aboutus_box_hero">
                <div className="aboutus_box_hero_left">
                    <h1>About Us</h1>
                    <p>
                        RUS Engineering Solutions is a trusted provider of comprehensive electrical and mechanical engineering services. We specialize in designing and drafting, MEP solutions, and the supply of high-quality electrical and mechanical products. With strong technical expertise and a commitment to excellence, we deliver reliable support for a wide range of industrial and commercial projects.
                    </p>
                </div>

                <div className="aboutus_box_hero_right">
                    <img src={assets.aboutus} alt="About Us" />
                </div>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default AboutUs