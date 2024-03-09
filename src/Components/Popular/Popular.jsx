import React from 'react'
import './Popular.css'
import Items from '../Items/Items'
import data_product from '../Assets/data'
const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular_item">
        {
            data_product.map((item,i)=>{
               
                // hear import itemcomponent and share props to in the item component
                return<Items id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })
        }
      </div>
    </div>
  )
}

export default Popular
