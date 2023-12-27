import React, { useContext, useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
import productService from '../Services/productService';
import LoaderComponent from 'react-fullpage-custom-loader'


const ShopCategory = ({category, banner}) => {
  const {dispatch, filteredProducts, isLoading}  = useContext(ShopContext)
  console.log(filteredProducts);

  const filterProducts = async() => {
      dispatch({ type: 'IS_PENDING'})
      const response  = await productService.searchProducts({gender: category})
      dispatch({ type: 'FILTER_PRODUCT_SUCCESS', payload: response})
  }
  
  useEffect(() => {
      filterProducts()
  }, [category])
  
  return (
    <>
      {isLoading && (<LoaderComponent 
          sentences={[]}
          loaderType={'ball-triangle-path'}
      />)}
     {!isLoading && (<div className="container">
        <div className='shop-category'>
          <img src={banner} alt="" className='img-fluid shop-category-banner' />
          <div className="shop-category-sort-index">
            {/* <p>
              <span>Showing 1 - 12</span> out of 36 products
            </p>
            <div className="shop-category-sort">
              Sort by <img src={dropdown_icon} alt="" />
            </div> */}
          </div>
          <div className="shopcategory-products">
            <div className="row">
              {filteredProducts && filteredProducts.map((item,  i) => (
                  <div className="col-lg-3 mb-4" key={i}>
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
          {/* <div className="shop-category-loadmore">
            Explore More
          </div> */}
        </div>
      </div>
      )}
    </>
  )
}

export default ShopCategory
