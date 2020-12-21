import React from 'react'
import { connect } from "react-redux";

const Modal = ({prod, handleAdjustProduct, handleDeleteProduct}) => {
  const defaultContent = () => {
    return (
      <tr className="border-0">
        <td colSpan="6" className="text-center">No Product Exists</td>
      </tr>
    )
  }
  const renderProduct = () => {
    return prod.map((prod, idx) => {
      return (
        <tr key={idx}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>
            <img src={prod.image} alt="" height="70" />
          </td>
          <td>{prod.price}</td>
          <td>
            <button 
              className="btn btn-light mr-3"
              onClick={() => { handleAdjustProduct(prod.id, 'decrease') }}
            >
              -
            </button>
            {prod.quantity}
            <button 
              className="btn btn-light ml-3"
              onClick={() => { handleAdjustProduct(prod.id, 'increase') }}
            >
              +
            </button>
          </td>
          <td>{prod.total}</td>
          <td>
            <button 
              className="btn btn-danger"
              onClick={() => { handleDeleteProduct(prod.id) }}
            >
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }
  return (
    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Products List</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { prod.length ? renderProduct() : defaultContent() }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  prod: state.cartReducer.product
})

const mapDispatchToProps = dispatch => ({
  handleAdjustProduct: (productId, adjustType) => {
    const action = {
      type: 'ADJUST_PRODUCT',
      payload: { productId, adjustType }
    }
    dispatch(action)
  },
  handleDeleteProduct: productId => {
    const action = {
      type: 'REMOVE_FROM_CART',
      payload: productId
    }
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
