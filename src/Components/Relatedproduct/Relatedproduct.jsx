import React from 'react'
import './Relatedproduct.css'
import data_product from '../Assets/data'
import Items from '../../Components/Items/Items'
const Relatedproduct = () => {
  return (
    <div className='Relatedproduct'>
      <h1>Related Product</h1>
      <hr />
      <div className="relatedproduct_item">
      {
        data_product.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          
        })
      }
      </div>
    </div>
  )
}

export default Relatedproduct
