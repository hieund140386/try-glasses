import React from 'react'
import { connect } from 'react-redux'

const Product = (props) => {
  const { prod, handleAddToCart } = props;
  const { image, name, price } = prod;
  return (
    <div className="card">
      <img className="card-img-top" src={ image } height="300" alt="" />
      <div className="card-body">
        <h4 className="card-title">{ name }</h4>
        <p className="card-text">{ price }</p>
      </div>
      <button 
        className="btn btn-success"
        onClick={() => { handleAddToCart(prod) }}
      >
        Add to cart
      </button>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  handleAddToCart: product => {
    const action = {
      type: 'ADD_TO_CART',
      payload: product
    }
    dispatch(action)
  }
})

export default connect(null, mapDispatchToProps)(Product);