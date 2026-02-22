import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts'
import AboutUs from '../../components/AboutUs/AboutUs'

const Home = () => {

  const [category,setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <AboutUs/>
        <ExploreProducts category={category} setCategory={setCategory}/>
        
    </div>
  )
}

export default Home