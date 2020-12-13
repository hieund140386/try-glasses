import React, { Component } from 'react'
import OtherProduct from './OtherProduct';
import Product from './Product';

const arrProduct = [

  { id: 1, price: 30, name: 'GUCCI G8850U', url: '/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

  { id: 2, price: 50, name: 'GUCCI G8759H', url: '/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

  { id: 3, price: 30, name: 'DIOR D6700HQ', url: '/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

  { id: 4, price: 30, name: 'DIOR D6005U', url:  '/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

  { id: 5, price: 30, name: 'PRADA P8750', url: '/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

  { id: 6, price: 30, name: 'PRADA P9700', url: '/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

  { id: 7, price: 30, name: 'FENDI F8750', url: '/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

  { id: 8, price: 30, name: 'FENDI F8500', url: '/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

  { id: 9, price: 30, name: 'FENDI F4300', url: '/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

 ];

 const newArrProduct = arrProduct.map((product, index) => {
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
          className="btn border border-dark m-2" 
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
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Product glassInfo={{url, desc}}/>
          </div>
          <div className="col-6">
            <OtherProduct />
          </div>
        </div>
        <div className="row mt-5 py-5 bg-white text-dark">
          {this.renderGlassesList()}
        </div>
      </div>
    )
  }
}
