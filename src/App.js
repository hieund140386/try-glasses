import React from 'react'
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-between align-items-center my-3 py-3">
        <button 
          className="btn btn-success" 
          data-toggle="modal" 
          data-target="#modelId"
        >
          Go to cart
        </button>
        <Cart />
      </div>
      <Modal />
      <ProductList />
    </div>
  )
}

export default App;