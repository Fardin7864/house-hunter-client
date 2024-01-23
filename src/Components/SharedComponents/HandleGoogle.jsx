import React from 'react'
import { FcGoogle } from 'react-icons/fc'
// import { toast } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
// import { savedUser } from '../../CommonApi/Auth'
import UseAuth from '../../Providers/UseAuth'
import { savedUser } from '../../CommonApi/AuthUserApi'

const HandleGoogle = () => {
  const { signInWithGoogle, setLoading } = UseAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname||'/'
  {/* ====handle google login===== */ }
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        // console.log(result.user);
        // current user save for the db
        savedUser(result.user,result.user.photoURL)
        navigate(from,{replace:true})
      }).catch(error => {
        setLoading(false)
        console.log(`Error:`, error.message);
        // toast.error(error.message)
      })
  }

  return (
    <div onClick={handleGoogleLogin} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
      <FcGoogle size={32} />
      <p>Continue with Google</p>
    </div>
  )
}

export default HandleGoogle