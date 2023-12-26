import React, { useState } from 'react'
import './ProductDisplay.css'
import CheckoutModal from '../Modals/CheckoutModal'
// import star_icon from '../Assets/star_icon.png'
// import  star_dull_icon  from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props
    const [selectedImage, setSelectedImage]  = useState(0)
    const [show, setShow] = useState(false);


    // create modal
    const handleShow = () => setShow(true);

    //  close modal
    const handleClose = () => setShow(false);

  return (
    <>
        <div className='product-display'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="product-display-left">
                        <div className="product-display-img">
                            <img className='product-display-main-img img-fluid' src={product?JSON.parse(product.image)[selectedImage] : ''} alt="" />
                        </div>
                        <div className="product-display-img-list">
                            {product && JSON.parse(product.image).map((e,i) => (
                                <div className={`display_img`} 
                                    onClick={() => setSelectedImage(i)}
                                    key={i}
                                >
                                    <img className={`${selectedImage == i ? 'bordered' : ''} img-fluid`} src={e} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product-display-right  py-lg-3">
                        <h1>{product?.name}</h1>
                        {/* <div className="product-display-right-stars">
                            <img className='img-fluid' src={star_icon} alt="" />
                            <img className='img-fluid' src={star_icon} alt="" />
                            <img className='img-fluid' src={star_icon} alt="" /> 
                            <img className='img-fluid' src={star_dull_icon} alt="" />
                            <img className='img-fluid' src={star_dull_icon} alt="" />
                            <p>(122)</p>
                        </div> */}
                        <div className="product-display-right-prices">
                            {product && product.new_price && (
                                <div className="product-display-right-price-old">
                                    ₦{Number(product.price).toLocaleString()}
                                </div>
                            )}
                            {product && (
                                <div className="product-display-right-price-new">
                                    ₦{product.new_price ? Number(product.new_price).toLocaleString() : Number(product.price).toLocaleString()}
                                </div>
                            )}
                        </div>
                        <div className="product-display-right-description">
                            {product?.description}
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
                        <button className='btn btn-danger btn-lg' onClick={() => handleShow()}>
                            BUY NOW
                        </button>
                        <p className="product-display-right-category">
                            <span>Category: </span>
                            {product?.subcategory.category.name}
                        </p>
                        <p className="product-display-right-category">
                            <span>Tags: </span>
                            Modern, Latest, 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {product  &&  <CheckoutModal show={show} closeModal={handleClose} productId={product.id}/>}
    </>
  )
}

export default ProductDisplay
