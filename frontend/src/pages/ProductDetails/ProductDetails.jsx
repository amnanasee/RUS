import React from 'react'
import { useParams } from 'react-router-dom'
import { menu_list } from '../../assets/assets'
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams()
  const product = menu_list.find(item => item.id === Number(id))

  if (!product) return <h2>Product not found</h2>

  if (product.id === 1) {
  return (
    <div className="es-product-container">

      <h1 className="es-title">
        ES3035E+ Digital Insulation Resistance Meter
      </h1>

      {/* Top Images */}
      <div className="es-images">
        <img src={product.product_image} alt="product" />
      </div>

      {/* I. Characteristic */}
      <div className="es-section">
        <h3>I . Characteristic</h3>
        <p>{product.characteristics}</p>
      </div>

      {/* II. Technical Specification */}
      <div className="es-section">
        <h3>II . Technical Specification</h3>

        <table>
      <tbody>
            {product.technicalSpecifications.map((spec, index) => (
              <tr key={index}>
                <td className='spec-name'>{spec.name}</td>
                <td>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* III. Packing List */}
      <div className="es-section">
        <h3>III . Packing List</h3>

        <table>
      <tbody>
            {product.packingList.map((item, index) => (
              <tr key={index}>
                <td className='item-name'>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}


  return (
    <div className="product-container">

      {/* TOP SECTION */}
      <div className="product-top">
        <div className="product-info">
          <h1>{product.product_name}</h1>

          <ul>
            {product.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="product-image">
          <img src={product.product_image} alt={product.product_name} />
        </div>
      </div>

      {/* PRODUCT APPLICATION */}
      <div className="product-application">
        <h3>PRODUCT APPLICATION</h3>
        <p>{product.application}</p>
      </div>

      {/* SPECIFICATIONS TABLE */}
      <div className="product-specifications">
        <h3>SPECIFICATIONS</h3>

        <table>
          <thead>
            <tr>
              <th>Function / Model</th>
              <th>FR207C</th>
              <th>FR207D</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {product.specifications.map((spec, index) => (
              <tr key={index}>
                <td className='specification-name'>{spec.name}</td>
                <td>{spec.value1}</td>
                <td>{spec.value2}</td>
                <td>{spec.accuracy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FEATURES TABLE */}
    <div className="product-features">
      <h3>FEATURES</h3>

      <table>
        <tbody>
          {product.featuresTable.map((feature, index) => (
            <tr key={index}>
              <td className="feature-name">{feature.name}</td>
              <td className="feature-value">
                {typeof feature.value === "boolean" ? (
                  feature.value && <span className="dot"></span>
                ) : (
                  feature.value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    </div>
  )
}

export default ProductDetails
