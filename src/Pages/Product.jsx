import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import ProductDisplay from '../Components/ProductDIsplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct'

const Product = () => {
  const {all_products}  = useContext(ShopContext)
  const {productId} = useParams()

  const product = all_products.find((p) => p.id === Number(productId))

  return (
    <div>
      <div className="container">
        <Breadcrumb product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProduct />
      </div>
    </div>
  )
}

export default Product
