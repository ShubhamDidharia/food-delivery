import React, { useRef } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export const ExploreMenu = ({category,setCategory}) => {
  const scrollContainerRef = useRef(null); // Ref for the scrollable container

  // Scroll Left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Scroll Right
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>"Turn every meal into a treat—explore our menu, order your favorites now, and let us deliver happiness to your doorstep, fresh and fast!"</p>

      <div className="scroll-container">
        {/* Left Arrow */}
        <button className="scroll-left" onClick={scrollLeft}>&lt;</button>

        {/* Scrollable Menu List */}
        <div  className="explore-menu-list" ref={scrollContainerRef}>
          {menu_list.map((item, i) => {
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} className="explore-menu-list-item" key={i}>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>

        {/* Right Arrow */}
        <button className="scroll-right" onClick={scrollRight}>&gt;</button>
      </div>
      <hr />
    </div>
  )
}
