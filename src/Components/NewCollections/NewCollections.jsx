import React, { useContext, useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import {Pagination } from '@mui/material';
import productService from '../../Services/productService'
import { ShopContext } from '../../Context/ShopContext'

const NewCollections = () => {
    const {dispatch, products}  = useContext(ShopContext)

    //  state for pagination
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    console.log(pageCount);

    const fetchProducts = async() => {
        dispatch({ type: 'IS_PENDING'})
        const response  = await productService.fetchProducts(page)
        const pageCount = await Math.ceil(response.total / response.per_page);
        await setPageCount(pageCount)
        dispatch({ type: 'IS_SUCCESS', payload: response})
    }

    //  pagination function
    const handlePageChange = (event, value) => {
        setPage(value);
    };
    
    useEffect(() => {
        fetchProducts()
    }, [page])

  return (
    <div className="container">
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                <div className="row">
                    {products && products.data.length > 0 && products.data.map((item, i) => (
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
        <div className="d-flex justify-content-center mb-5">
            <Pagination 
                onChange={handlePageChange}  
                count={pageCount} 
                color="secondary" 
                variant='outlined'
                page={page}
            />
        </div>
    </div>
  )
}

export default NewCollections
