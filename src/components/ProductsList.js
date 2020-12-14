import React, { Component } from 'react'
import OtherProduct from './OtherProduct';
import Product from './Product';
import model from '../images/glasses/model.jpg'
import NewGlassesList from '../models/NewGlassesList'


export default class ProductsList extends Component {

  state = {
      product: {
        id: null, 
        price: null, 
        name: null, 
        url: null, 
        desc: null
      }
  };

  handleSelectGlass = (product) => {
    this.setState({
      product
    });
  }

  renderGlassesList = () => {
    return NewGlassesList.map((product, index) => {
      return (
        <button 
          type="button" 
          className="btn border border-dark m-2 col-3" 
          key={ index }
          onClick={() => { this.handleSelectGlass(product) }}
        >
          <img 
            src={`${(product.selectedGlass)}`} 
            alt="no available" width="100px" 
          />
        </button>
      );
    });
  }
  render() {
    const { url, desc } = this.state.product;
    const glassInfo = { url, desc };
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Product glassInfo={{ url, desc }} model={ model }/>
          </div>
          <div className="col-6">
            <OtherProduct model={ model }/>
          </div>
        </div>
        <div className="row mt-5 py-3 bg-white justify-content-center" >
          {this.renderGlassesList()}
        </div>
      </div>
    )
  }
}
