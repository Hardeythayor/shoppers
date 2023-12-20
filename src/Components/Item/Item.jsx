import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'

const Item = (props) => {
  const navigate = useNavigate()

  const goToProduct = (id) => {
    navigate(`/products/${id}`)
    window.scrollTo(0,0)
  }

  return (
    <div className='item' onClick={() => goToProduct(props.id)}>
      <img src={props.image} alt="" className='img-fluid'/>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
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
  )
}

export default Item
