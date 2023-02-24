import React from 'react'
import './Side.scss'
import Slider from 'infinite-react-carousel'
import CatCard from '../catCard/CatCard'
import { cards } from '../../data.js'
const Side = ({ children, slidesToShow, arrowsScroll }) => {
   return (
      <div className="side">
         <div className="container">
            <Slider
               dots
               slidesToShow={slidesToShow}
               arrowsScroll={arrowsScroll}
            >
             
               {children}
            </Slider>
         </div>
      </div>
   )
}

export default Side
