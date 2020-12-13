import React, { Component } from 'react'
import OtherProduct from './OtherProduct';
import Product from './Product';
import { GlassesList } from '../models/GlassesList'

 const newArrProduct = GlassesList.map((product, index) => {
   let newUrl = product.url.replace("/glassesImage", "./images/glasses");
   return (
     { ...product, url: newUrl }
   );
 });


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
  }, () => {
      console.log("after setState - handleSelectGlass - url", this.state.product.url);
      console.log("after setState - handleSelectGlass - desc", this.state.product.desc);
    });
  }

  renderGlassesList = () => {
    return newArrProduct.map((product, index) => {
      return (
        <button 
          type="button" 
          className="btn border border-dark m-2 col-3" 
          key={index}
          onClick={() => {this.handleSelectGlass(product)}}
        >
          <img 
            src={`${(product.url)}`} 
            alt="no available" width="100px" 
          />
        </button>
      );
    });
  }
  render() {
    const { url, desc } = this.state.product;
    const glassInfo = {url, desc};
    console.log("In render of product list: product list url: ", glassInfo.url);
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Product glassInfo={{url, desc}}/>
          </div>
          <div className="col-6">
            <OtherProduct />
          </div>
        </div>
        <div className="row mt-5 py-3 bg-white justify-content-center" >
          {this.renderGlassesList()}
        </div>
      </div>
    )
  }
}
