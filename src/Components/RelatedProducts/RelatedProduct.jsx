import React, { useContext, useEffect } from 'react'
import './RelatedProduct.css'
import product_data from '../Assets/data'
import Item from '../Item/Item'
import productService from '../../Services/productService'
import { ShopContext } from '../../Context/ShopContext'

const RelatedProduct = ({productId}) => {
    const {dispatch, similarProducts, isLoading}  = useContext(ShopContext)

    const fetchSimilarProduct = async() => {
        dispatch({ type: 'IS_PENDING'})
        const response  = await productService.fetchSimilarProducts(productId)
        dispatch({ type: 'SIMILAR_PRODUCT_SUCCESS', payload: response})
    }
    
    useEffect(() => {
        fetchSimilarProduct()
    }, [productId])

  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-product-items">
            <div className="row">
                {similarProducts && similarProducts.map((item, i) => (
                    <div className="col-lg-3 col-6 mb-4" key={i}>
                        <Item 
                            id={item.id}
                            name={item.name}
                            image={JSON.parse(item.image)[0]}
                            new_price={item.new_price}
                            old_price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RelatedProduct
