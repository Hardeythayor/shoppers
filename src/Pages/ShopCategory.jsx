import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  
  return (
    <div className="container">
      <div className='shop-category'>
        <img src={props.banner} alt="" className='img-fluid shop-category-banner' />
        <div className="shop-category-sort-index">
          <p>
            <span>Showing 1 - 12</span> out of 36 products
          </p>
          <div className="shop-category-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          <div className="row">
            {all_products.map((item,  i) => {
              if(props.category === item.category) {
                return <div className="col-lg-3 mb-4" key={i}>
                    <Item 
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                </div>
              } else {
                return null
              }
            })}
          </div>
        </div>
        <div className="shop-category-loadmore">
          Explore More
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
