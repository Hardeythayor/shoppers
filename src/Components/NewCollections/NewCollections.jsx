import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className="container">
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                <div className="row">
                    {new_collections.map((item, i) => (
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

export default NewCollections
