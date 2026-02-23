import React from 'react'
import { useParams } from 'react-router-dom'
import { menu_list } from '../../assets/assets'
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams()
  const product = menu_list.find(item => item.id === Number(id))

  if (!product) return <h2>Product not found</h2>


  return (
  <div className="product-page">

    {/* LEFT IMAGE */}
    <div className="product-left">
      <img src={product.product_image} alt={product.product_name} />
    </div>

    {/* RIGHT INFO */}
    <div className="product-right">

      <h1>{product.product_name}</h1>

      {/* MAIN POINTS */}
    <div className="badges">
    {product.shortPoints?.map((p,i)=>(
      <span key={i} className="badge">{p}</span>
    ))}
    </div>  

      {/* PDF BUTTON */}
      {product.brochurePdf && (
        <a
          href={product.brochurePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="catalogue-btn"
        >
          Product Catalogue
        </a>
      )}

    </div>
  </div>

  )
}  


export default ProductDetails
