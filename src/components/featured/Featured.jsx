import React from 'react'
import { motion } from 'framer-motion'
import './Featured.scss'

const Featured = () => {
   return (
      <div className="featured">
         <div className="container">
            <div className="left">
               <h1>
                  Lorem ipsum <i>dolor</i> sit amet.
               </h1>
               <div className="search">
                  <div className="searchInput">
                     <img src="./img/search.png" alt="" />
                     <input type="text" placeholder="Try building mobil app" />
                  </div>
                  <motion.button whileTap={{ scale: 1.3 }}>
                     Search
                  </motion.button>
               </div>
               <div className="popular">
                  <button>Popular:</button>
                  <button>Web Design</button>
                  <button>Wordpress</button>
                  <button>Logo Design</button>
                  <button>AI Services</button>
               </div>
            </div>
            <div className="right">
               <img
                  data-aos="zoom-in-left"
                  data-aos-delay="50"
                  data-aos-duration="1500"
                  src="./img/man.png"
                  alt=""
               />
            </div>
         </div>
      </div>
   )
}

export default Featured
