import React from 'react'
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <Link to={'/'} className='flex items-center'><img className='hidden md:block' src="https://househunter-e3d07.web.app/assets/logo-86142309.png" alt="logo img" width={40} height={20} />
      <h3 className='text-primary font-bold text-xl'>House<span className='text-white'>Hunter</span></h3>
    </Link>
  )
}

export default Logo
