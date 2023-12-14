import React from 'react'
import './RelatedProduct.css'
import product_data from '../Assets/data'
import Item from '../Item/Item'

const RelatedProduct = () => {
  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-product-items">
            <div className="row">
                {product_data.map((item, i) => (
                    <div className="col-lg-3 mb-4" key={i}>
                        <Item 
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RelatedProduct
