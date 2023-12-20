import React from 'react'
import './ProductDisplay.css'
// import star_icon from '../Assets/star_icon.png'
// import  star_dull_icon  from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props

  return (
    <div className='product-display'>
        <div className="row">
            <div className="col-lg-7">
                <div className="product-display-left">
                    <div className="product-display-img">
                        <img className='product-display-main-img img-fluid' src={product.image} alt="" />
                    </div>
                    <div className="product-display-img-list">
                        {[1,2,3,4].map((e,i) => (
                            <div className="display_img" key={i}>
                                <img className='img-fluid' src={product.image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="product-display-right">
                    <h1>{product.name}</h1>
                    {/* <div className="product-display-right-stars">
                        <img className='img-fluid' src={star_icon} alt="" />
                        <img className='img-fluid' src={star_icon} alt="" />
                        <img className='img-fluid' src={star_icon} alt="" /> 
                        <img className='img-fluid' src={star_dull_icon} alt="" />
                        <img className='img-fluid' src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div> */}
                    <div className="product-display-right-prices">
                        <div className="product-display-right-price-old">${product.old_price}</div>
                        <div className="product-display-right-price-new">${product.new_price}</div>
                    </div>
                    <div className="product-display-right-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dicta minima, 
                        cupiditate modi placeat, iste tempore odit nesciunt reprehenderit commodi, 
                        consectetur officiis accusamus temporibus? Est, magnam tempore! A, saepe temporibus.
                    </div>
                    {/* <div className="product-display-right-size">
                        <h1>Select Size</h1>
                        <div className="product-display-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div> */}
                    <button className='btn btn-danger btn-lg'>BUY NOW</button>
                    <p className="product-display-right-category">
                        <span>Category: </span>
                        Women, T-Shirt, Crop Top
                    </p>
                    <p className="product-display-right-category">
                        <span>Tags: </span>
                        Modern, Latest, 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
