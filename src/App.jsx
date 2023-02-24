import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Gig from './pages/gig/Gig'
import Gigs from './pages/gigs/Gigs'
import Home from './pages/home/Home'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import MyGigs from './pages/myGigs/MyGigs'
import Orders from './pages/orders/Orders'
import './app.scss'
import Add from './pages/add/Add'
// AOS.init()
const App = () => {
   const Layout = () => {
      return (
         <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
         </div>
      )
   }
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Layout />,
         children: [
            {
               path: '/',
               element: <Home />,
            },
            {
               path: '/gigs',
               element: <Gigs />,
            },
            {
               path: '/gig/:id',
               element: <Gig />,
            },
            {
               path: '/orders',
               element: <Orders />,
            },
            {
               path: '/add',
               element: <Add />,
            },
            {
               path: '/mygigs',
               element: <MyGigs />,
            },
            {
               path: '/messages',
               element: <Messages />,
            },
            {
               path: '/message/:id',
               element: <Message />,
            },
         ],
      },
   ])
   return (
      <div>
         <RouterProvider router={router} />
      </div>
   )
}

export default App
