import React, { useState } from 'react'
import Side from '../../components/side/Side'
import { gigs } from '../../data.js'
import GigCard from '../../components/gigCard/GigCard'
import './Gigs.scss'
const Gigs = () => {
   const [open, setOpen] = useState(false)
   const [sort, setSort] = useState('Best selling')
   const reSort = (type) => {
      setSort(type)
      setOpen(false)
   }
   return (
      <div className="gigs">
         <div className="container">
            <span className="breadcrumbs">Liverr Graphics & Design </span>
            <h1>AI Artists</h1>
            <p>
               Explore the boundaries of art and technology with Liverr's AI
               artists
            </p>
            <div className="menu">
               <div className="left">
                  <span>Budget</span>
                  <input type="number" placeholder="min" />
                  <input type="number" placeholder="max" />
                  <button onClick={() => {}}>Apply</button>
               </div>
               <div className="right">
                  <span className="sortBy">Sort by</span>
                  <span className="sortType">{sort}</span>
                  <img
                     src="./img/down.png"
                     alt=""
                     onClick={() => setOpen(!open)}
                  />
                  {open && (
                     <div className="rightMenu">
                        {sort === 'sales' ? (
                           <span onClick={() => reSort('createdAt')}>
                              Newest
                           </span>
                        ) : (
                           <span onClick={() => reSort('sales')}>
                              Best Selling
                           </span>
                        )}
                        <span onClick={() => reSort('sales')}>Popular</span>
                     </div>
                  )}
               </div>
            </div>
            <div className="cards">
               <Side slidesToShow={4} arrowsScroll={5}>
                  {gigs.map((item) => (
                     <GigCard item={item} key={item.id} />
                  ))}
               </Side>
            </div>
         </div>
      </div>
   )
}

export default Gigs
