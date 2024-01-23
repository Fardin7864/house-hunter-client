import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import UseAuth from '../../Providers/UseAuth';
import Logo from '../../Components/SharedComponents/Logo';
import RenterDashboardNavLinks from './RenterDashboard';

const Sidebar = () => {
  const navigate = useNavigate()
  const { user, logOut } = UseAuth()
  const [isActive, setActive] = useState('false')
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  const handleLogOut = () => {
    logOut()
    navigate('/')
  }
  // const [allUsers] = UseAllUsers()
  // const currentUser = allUsers?.find(users => users?.email === user?.email)
  // console.log(currentUser,'currentUser');
  // console.log('allUsers',allUsers);
  let currentUser={role:'renter'}
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100  text-gray-800 dark:text-white flex justify-between md:hidden dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728]'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>

          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none'
        >
          {isActive ? <Bars3BottomRightIcon className='h-8 w-8 font-semibold' /> : <XMarkIcon className='h-8 w-8 semibold' />}
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728] ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className='w-full hidden md:flex py-2 justify-center items-center bg-slate-600 rounded-md mx-auto border-2'>
              <Logo />
            </div>
            <div className='flex flex-col items-center mt-6 -mx-2'>
              <div>
                <img
                  className='object-cover w-24 h-24 mx-2 rounded-full'
                  src={user.photoURL?user.photoURL:'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg'}
                  alt='avatar'
                  referrerPolicy='no-referrer'
                />
              </div>
              <div>
                <h4 className='mx-2 mt-2 font-medium text-gray-800 dark:text-white  hover:underline'>
                  {user?.displayName}
                </h4>
              </div>
              <Link to='/dashboard'>
                <p className='mx-2 mt-1 text-sm font-medium lowercase text-gray-600 dark:text-white  hover:underline'>
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              {currentUser?.role === 'renter' && <RenterDashboardNavLinks />}
              {/* {currentUser?.role === 'instructor' &&<InstructorDashboardNabLinks />}
              {currentUser?.role === 'admin' &&<AdminDashboardNavLinks />} */}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to='/dashboard/profile'
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-600 dark:rounded-md   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-600 dark:rounded-md   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar