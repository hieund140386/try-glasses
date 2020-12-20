import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'
import { connect } from "react-redux";

class ExerciseCarStore extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="mt-5" >
        <h2 className="text-center py-3 bg-dark text-white">Car Store</h2>
        <Modal car={product} />
        <ProductList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.carReducer.selectedCar
})

export default connect(mapStateToProps)(ExerciseCarStore);