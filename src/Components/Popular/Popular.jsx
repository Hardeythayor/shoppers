import React, { useContext, useEffect } from 'react'
import './Popular.css'
import Item from '../Item/Item'

import { ShopContext } from '../../Context/ShopContext';
import productService from '../../Services/productService';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Popular = () => {
    const {dispatch, trendingProducts, isLoading}  = useContext(ShopContext)

    const fetchTrendingProducts = async() => {
        dispatch({ type: 'IS_PENDING'})
        const response  = await productService.fetchTrendingProducts()
        dispatch({ type: 'TRENDING_PRODUCT_SUCCESS', payload: response})
    }

    useEffect(() => {
        fetchTrendingProducts()
    }, [])

  return (
    <div className="container">
        <div className='popular'>
            <h1>TRENDING COLLECTIONS</h1>
            <hr />
            
            <Swiper 
                spaceBetween={30} 
                slidesPerView={1.5}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2.5,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2.5,
                    },
                }}
            >  
                {trendingProducts && trendingProducts.length > 0 && trendingProducts.map((item, i) => (
                    <SwiperSlide key={`product-slider${item.id}`}>
                        <Item 
                            id={item.id}
                            name={item.name}
                            image={JSON.parse(item.image)[0]}
                            new_price={item.new_price}
                            old_price={item.price}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="popular-item">
                
                {/* <div className="row">
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
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Popular
