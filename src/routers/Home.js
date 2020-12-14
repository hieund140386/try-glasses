import React from 'react'
import Header from '../components/Header'
import ProductsList from '../components/ProductsList'
import HomeStyle from '../stylesheets/home.module.scss'

export default function Home() {
  return (
    // <div style={{
    //   backgroundImage: 'url(./images/glasses/home-background.jpg)', 
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover',
    //   height: '1000px'
    //   }}>
    //   <Header />
    //   <ProductsList />
    // </div>
    <div className={ HomeStyle['home'] }>
      <Header />
      <ProductsList />
    </div>
  )
}
