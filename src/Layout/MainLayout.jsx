import {useState,useEffect} from 'react'
import Footer from '../Components/Footer/Footer'
import { Outlet } from "react-router-dom";
import NavBar from '../Components/Navbar/Navbar';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../Components/SharedComponents/LoadingSpinner';
import ScrollToTopButton from '../Components/SharedComponents/SrcrollToTopButton';
const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className='bg-white'>
      <NavBar />
      <div className="min-h-[calc(100vh-68px)] pt-24 pb-10 ">
        <ScrollToTopButton/>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default MainLayout