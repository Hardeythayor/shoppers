import React from 'react'
import './Popular.css'
import product_data from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="container">
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                <div className="row">
                    {product_data.map((item, i) => (
                        <div className="col-lg-3 col-6 mb-4" key={i}>
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
    </div>
  )
}

export default Popular
