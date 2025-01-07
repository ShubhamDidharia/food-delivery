import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const FoodItem = ({id,name,price,description,image}) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className = 'food-item-img'src={image}  />
            {!itemCount
              ? <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} />
              : <div className='food-item-counter'>
                  <img onClick={()=>setItemCount(prev=>prev-1) } src={assets.remove_icon_red} alt="" />
                  <p className='itemcount-text'>{itemCount}</p>
                  <img onClick={()=>setItemCount(prev=>prev+1) } src={assets.add_icon_green} alt="" />

              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}  />
            </div>
            <p className="food-item-description">{description}</p>
            <p className={"abcd"}>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem