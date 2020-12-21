import React from 'react'
import { connect } from 'react-redux'


const Cart = ({prod}) => {
  const renderProductCounts = () => {
    const productItems = prod.reduce(
      (itemsTotal, current) => itemsTotal + current.quantity, 0);
    return productItems;
  }
  return (
    <i 
      className="fa fa-shopping-cart border"
      title="Go to cart"
      data-toggle="modal"
      data-target="#modelId"
    >
      <sup 
        className="badge badge-danger" 
        style={{
          borderRadius: "50%", 
          width: "16px", 
          height: "16px", 
          textAlign: "center",
          padding: "5px",
        }}
      >
        { renderProductCounts() }
      </sup>
    </i>
  )
}

const mapStateToProps = state => ({
  prod: state.cartReducer.product
})

export default connect(mapStateToProps)(Cart)
