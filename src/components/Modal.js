import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Modal extends Component {
  renderCarsList = () => {
    const product = {...this.props.car};
      return (
        <tr>
          <td className="text-center">{product.id}</td>
          <td className="text-center">{product.name}</td>
          <td className="text-center">
            <img src={product.img} height="70" alt={product.name} />
          </td>
          <td className="text-center">{product.price}</td>
        </tr>
      )
  }
  render() {
    return (
      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cars List Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Image</th>
                    <th className="text-center">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderCarsList()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;