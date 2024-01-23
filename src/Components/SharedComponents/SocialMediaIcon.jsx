import React from 'react'
import {FaFacebookF,FaGooglePlus, FaLinkedinIn,FaTwitter } from 'react-icons/fa'
const SoclialMediaIcon = () => {
  return (
    <div className='flex gap-4 justify-center items-center mb-5'>
    <a target='_blank' href='https://www.facebook.com'><FaFacebookF className='text-4xl text-white p-2 rounded-full bg-blue-600 cursor-pointer transition-all duration-300 hover:bg-slate-700'/></a>
    <a target='_blank' href='https://www.google.com'><FaGooglePlus className='text-4xl text-white p-2 rounded-full bg-red-600 cursor-pointer transition-all duration-300 hover:bg-slate-700'/></a>
    <a target='_blank' href='https://www.twitter.com'><FaTwitter className='text-4xl text-white p-2 rounded-full bg-[#1DA1F2] cursor-pointer transition-all duration-300 hover:bg-slate-700'/></a>
    <a target='_blank' href='https://www.linkedin.com'><FaLinkedinIn className='text-4xl text-white p-2 rounded-full bg-[#0C63BC] cursor-pointer transition-all duration-300 hover:bg-slate-700'/></a>
  </div>
  )
}

export default SoclialMediaIcon