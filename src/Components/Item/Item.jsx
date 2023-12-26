import React, { useState } from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'
import PromoCodeModal from '../Modals/PromoCodeModal';

const Item = (props) => {
  const navigate = useNavigate()

  // create modal show state
  const [show, setShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null)

  // create modal
  const handleShow = () => setShow(true);

  //  close modal
  const handleClose = () => setShow(false);

  const goToProduct = (id) => {
    const  promoCode = localStorage.getItem('promoCode')
    if(promoCode) {
      navigate(`/products/${id}`)
      window.scrollTo(0,0)
    }else {
      setCurrentProduct(id)
      handleShow()
    }
  }

  return (
    <>
      <div className='item' onClick={() => goToProduct(props.id)}>
        <img src={props.image} alt="" className='img-fluid'/>
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">
              ₦{props.new_price ? Number(props.new_price).toLocaleString() : Number(props.old_price).toLocaleString()}
          </div>
          {props.new_price && <div className="item-price-old">
              ₦{Number(props.old_price).toLocaleString()}
          </div>}
        </div>
        <div className="item-warranty">
          <div className="d-flex warranty-wrapper align-items-center">
            <i className='mdi mdi-shield-check first'></i>
            <span>Buyer Protection</span>
          </div>
          <div className="d-flex warranty-wrapper align-items-center">
            <i className='mdi mdi-check-decagram second'></i>
            <span>Authenticity Guarantee</span>
          </div>
          <div className="d-flex warranty-wrapper align-items-center">
            <i className='mdi mdi-file-document-check third'></i>
            <span>Proper Documentation</span>
          </div>
          <div className="d-flex warranty-wrapper align-items-center">
            <i className='mdi mdi-all-inclusive-box fourth'></i>
            <span>Insurance</span>
          </div>
        </div>

      </div>

      <PromoCodeModal show={show} closeModal={handleClose} productId={currentProduct} />
    </>
  )
}

export default Item
