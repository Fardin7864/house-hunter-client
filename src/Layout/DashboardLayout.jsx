import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Pages/Dashboard/Sidebar';
import UseAuth from '../Providers/UseAuth';
import LoadingSpinner from '../Components/SharedComponents/LoadingSpinner';

const DashboardLayout = () => {
  const {loading} = UseAuth()

  if (loading) {
    return(<LoadingSpinner/>)
  }
  return (
    <div className='relative min-h-screen md:flex'>
      <Sidebar />
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default DashboardLayout