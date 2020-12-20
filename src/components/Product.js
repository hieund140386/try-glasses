import React from 'react'
import { connect } from 'react-redux';
import types from '../store/actions/types'


 function Product(props) {
  const { prod, handleMoreDetails } = props;
  const { img, name, price } = prod;
  return (
    <div className="card">
      <img className="card-img-top" src={img} alt="" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{price}</p>
      </div>
      <button 
        className="btn btn-success" 
        data-toggle="modal" 
        data-target="#modelId" 
        onClick={() => {handleMoreDetails(prod)}}
      >
        More details
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => (
  {
    handleMoreDetails: product => {
      const action = {
        type: 'SELECT_CAR',
        payload: product
      }
      dispatch(action)
    }
  }
)

export default connect(null, mapDispatchToProps)(Product);