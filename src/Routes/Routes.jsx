import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import HomePage from '../Pages/Home/HomePage'
import Login from '../Components/Login/Login'
import SignUp from '../Components/Register/Register'
import ErrorPage from '../Components/SharedComponents/ErrorPage'
import DashboardLayout from '../Layout/DashboardLayout'
import PrivateRoute from './PrivateRoute'
import MyBookings from '../Pages/Dashboard/MyBooking'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
      path: '/',
      element:<HomePage/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/signUp',
        element:<SignUp/>
      },
    ],
  },
  {
    path: '/dashboard',
    element:<PrivateRoute><DashboardLayout /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'mybookings',
        element:<MyBookings/>
      }
    ]
  }
])
