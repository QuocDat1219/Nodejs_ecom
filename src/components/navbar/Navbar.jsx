import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.scss'
const Navbar = () => {
   const [active, setActive] = useState(false)
   const [open, setOpen] = useState(false)

   const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false)
   }
   const currentUser = {
      id: 1,
      username: 'John Doe',
      isSeller: true,
   }

   const { pathname } = useLocation()

   useEffect(() => {
      window.addEventListener('scroll', isActive)
      return () => {
         window.removeEventListener('scroll', isActive)
      }
   }, [])
   return (
      <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
         <div className="container">
            <motion.div
               whileTap={{ scale: 1.8 }}
               whileHover={{ scale: 1.3 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="logo"
            >
               <Link to={'/'} className="link">
                  <span className="text">fiver</span>
               </Link>

               <span className="dot">.</span>
            </motion.div>
            <div className="links">
               <motion.span whileHover={{ scale: 1.3 }}>
                  Fiver Business
               </motion.span>
               <motion.span whileHover={{ scale: 1.3 }}>Explore</motion.span>
               <motion.span whileHover={{ scale: 1.3 }}>English</motion.span>
               <motion.span whileHover={{ scale: 1.3 }}>Sign in</motion.span>
               {!currentUser?.isSeller && <span>Become a Seller</span>}
               {!currentUser && <button>Join</button>}
               {currentUser && (
                  <>
                     <motion.div
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.3 }}
                        className="user"
                        onClick={() => {
                           setOpen(!open)
                        }}
                     >
                        <img
                           src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png"
                           alt=""
                        />
                        <span>{currentUser?.username}</span>
                        {open && (
                           <div
                              className="options"
                              data-aos={open && 'zoom-in'}
                           >
                              {currentUser?.isSeller && (
                                 <>
                                    <Link Link className="link" to={'/mygigs'}>
                                       Gigs
                                    </Link>
                                    <Link Link className="link" to={'/add'}>
                                       Add new gigs
                                    </Link>
                                 </>
                              )}
                              <Link className="link" to={'/orders'}>
                                 Orders
                              </Link>
                              <Link className="link" to={'/messages'}>
                                 Messages
                              </Link>
                              <Link className="link" to={'/'}>
                                 Logout
                              </Link>
                           </div>
                        )}
                     </motion.div>
                  </>
               )}
            </div>
         </div>
         <hr />
         {active ||
            (pathname !== '/' && (
               <>
                  {/* <hr /> */}
                  <div className="menu">
                     <Link className="link menuLink" to="/">
                        Graphics & Design
                     </Link>
                     <Link className="link menuLink" to="/">
                        Video & Animation
                     </Link>
                     <Link className="link menuLink" to="/">
                        Writing & Translation
                     </Link>
                     <Link className="link menuLink" to="/">
                        AI Services
                     </Link>
                     <Link className="link menuLink" to="/">
                        Digital Marketing
                     </Link>
                     <Link className="link menuLink" to="/">
                        Music & Audio
                     </Link>
                     <Link className="link menuLink" to="/">
                        Programming & Tech
                     </Link>
                     <Link className="link menuLink" to="/">
                        Business
                     </Link>
                     <Link className="link menuLink" to="/">
                        Lifestyle
                     </Link>
                  </div>
                  <hr />
               </>
            ))}
      </div>
   )
}

export default Navbar
