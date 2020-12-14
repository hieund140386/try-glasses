/**
 * Following is stateful component
 */

// import React, { Component } from 'react'
// import ProductStyle from '../stylesheets/product.module.scss'

// export default class Product extends Component {
//   render() {
//     const { url, desc } = this.props.glassInfo;
//     const model = this.props.model;
//     return (
//       <div className={ ProductStyle['product'] }>
//         <img 
//           src={ model } 
//           className="img-fluid" 
//           width="200px" 
//           alt="no available" 
//         />
//         { url && <img src={ url } alt="no available" /> }
//         { desc && <div>{ desc }</div> }
//     </div>
//     )
//   }
// }


/**
 * Following is stateless component
 */

import React from 'react'
import ProductStyle from '../stylesheets/product.module.scss'

export default function Product({glassInfo, model}) {
  const { url, desc } = glassInfo;
  return (
    <div className={ ProductStyle['product'] }>
      <img 
        src={ model } 
        className="img-fluid" 
        width="200px" 
        alt="no available" 
      />
      { url && <img src={ url } alt="no available" /> }
      { desc && <div>{ desc }</div> }
    </div>
  )
}
