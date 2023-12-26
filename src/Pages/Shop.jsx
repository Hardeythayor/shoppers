import React, { useContext } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import LoaderComponent from 'react-fullpage-custom-loader'
import { ShopContext } from '../Context/ShopContext'

const Shop = () => {
  const {isLoading}  = useContext(ShopContext)

  return (
    <>
      {isLoading && (<LoaderComponent 
          sentences={[]}
          loaderType={'ball-triangle-path'}
      />)}

      {!isLoading && (<div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
      </div>)}
    </>
  )
}

export default Shop
