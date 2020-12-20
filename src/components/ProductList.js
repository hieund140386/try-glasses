import React from 'react'
import carsList from '../model/carData'
import Product from './Product'


const ProductList = () => {
  const renderProduct = () => {
    return carsList.map((prod, idx) => {
      return (
        <div className="col-3" key={idx} >
          <Product prod={prod} />
        </div>
      )
    })
  }
  return (
    <div className="row">
      { renderProduct() }
    </div>
  )
}
export default ProductList;