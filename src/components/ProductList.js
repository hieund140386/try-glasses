import React from 'react'
import Product from "./Product";
import ProductsList from '../model/ProductList.json'

const ProductList = () => {
  const renderProduct = () => {
    return ProductsList.map((prod, idx) => {
      return (
        <div className="col-4" key={idx} >
          <Product prod={prod} />
        </div>
      )
    })
  }
  return (
    <div className="row">
      {renderProduct()}
    </div>
  )
}

export default ProductList
