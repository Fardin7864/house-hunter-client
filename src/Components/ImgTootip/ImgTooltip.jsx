import React, { useContext } from 'react'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import UseAuth from '../../Providers/UseAuth';
const ImgTooltip = () => {
  // console.log(user.photoURL);
  const {user} = UseAuth()
  return (
    <div className='cursor-pointer'>
      <img id="my-anchor-element" className='w-[3.5rem] h-[3.5rem] border-2 border-slate-600 ml-4  p-2 rounded-full' alt='user image' src={user.photoURL?user.photoURL:'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?size=626&ext=jpg&ga=GA1.2.734365179.1683055620&semt=ais'} />
      <Tooltip className='tracking-wider'
        anchorSelect="#my-anchor-element"
        content={user.displayName?user.displayName:'Anonymous User'}
      />
    </div>
  )
}

export default ImgTooltip
