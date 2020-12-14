import React from 'react'

export default function OtherProduct({model}) {
  return (
    <div className="text-white text-uppercase text-center">
      <img 
        src={ model } 
        className="img-fluid" 
        width="200px" 
        alt="no available" 
      />
    </div>
  )
}
