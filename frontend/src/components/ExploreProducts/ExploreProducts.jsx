import React from 'react'
import './ExploreProducts.css'
import { menu_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const ExploreProducts = () => {
  const navigate = useNavigate()

  return (
    <div className='explore-product' id='explore-product'>
      <h1>Explore Our Product</h1>
      <p className='explore-product-text'>
        Browse our collection of high-performance electrical testing instruments built for industrial and professional applications.
      </p>

      <div className='explore-product-list'>
        {menu_list.map((item) => (
          <div 
            key={item.id}
            className="explore-product-list-item"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.product_image} alt={item.product_name} />
          </div>
        ))}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreProducts
