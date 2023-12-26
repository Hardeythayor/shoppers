import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import ProductDisplay from '../Components/ProductDIsplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct'
import productService from '../Services/productService'
import LoaderComponent from 'react-fullpage-custom-loader'

const Product = () => {
  const {productId} = useParams()
  
  const {dispatch, product, isLoading}  = useContext(ShopContext)

  const fetchSingleProduct = async() => {
      dispatch({ type: 'IS_PENDING'})
      const response  = await productService.fetchSingleProduct(productId)
      dispatch({ type: 'SINGLE_PRODUCT_SUCCESS', payload: response})
  }
  
  useEffect(() => {
      fetchSingleProduct()
  }, [productId])

  return (
    <div>
      {isLoading && (<LoaderComponent 
          sentences={[]}
          loaderType={'ball-triangle-path'}
      />)}
      {!isLoading && (<div className="container">
        <Breadcrumb product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox product={product}/>
        <RelatedProduct productId={productId}/>
      </div>)}
    </div>
  )
}

export default Product
