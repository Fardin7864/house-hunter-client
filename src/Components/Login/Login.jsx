import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TbFidgetSpinner } from 'react-icons/tb'
import PasswordHideShow from '../SharedComponents/PasswordHideShow'
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form'
import { Helmet } from "react-helmet-async";
import UseAuth from "../../Providers/UseAuth";
import { savedUser } from "../../CommonApi/AuthUserApi";
const Login = () => {
  const { loading, setLoading, signIn, user } = UseAuth()
  // console.log({ user });

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { register, handleSubmit } = useForm()

  {/* ====const handleSubmit===== */ }
  const onSubmit = (data) => {
    const email = data.email
    const password = data.password
    // console.log(email,password);
    signIn(email, password)
      .then(result => {
        // console.log(result.user);
        // save user to db
        savedUser(result.user, result.user.photoURL)
        toast('LogIn Account Successfully !!!', { autoClose: 2000 })
        setTimeout(() => {
          // navigate(from, { replace: true })
          navigate('/dashboard')
        }, 3000);
        setLoading(false)
      }).catch(error => {
        console.log(`Error:`, error.message);
        toast.error('invalid email or password !!!', { autoClose: 2000 })
        setLoading(false)
      })
  }

  const [passwordshow, setPasswordshow] = useState(true)
  const handleShowPassowrd = () => {
    setPasswordshow(!passwordshow)
  }
  return (
    <div className='flex justify-center items-center min-h-screen mt-5'>
      <Helmet>
        <title>Music School || SignIn Page</title>
      </Helmet>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white shadow-md border-rose-500 dark:border-info border-2 text-slate-600  dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728] dark:text-white dark:border-2'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold dark:font-Merienda font-Pt'>Sign In</h1>
          <p className='text-sm text-gray-400 dark:text-white'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                {...register('email', { required: true })}
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md normal-case border-gray-300 focus:outline-info dark:focus:outline-rose-500 bg-gray-200 text-slate-600'
                data-temp-mail-org='0'
              />
            </div>

            <div className='relative'>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type={passwordshow ? 'text' : 'password'}
                {...register('password', { required: true })}
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 normal-case focus:outline-info dark:focus:outline-rose-500 bg-gray-200 text-slate-600'
              />
              <PasswordHideShow handleShowPassowrd={handleShowPassowrd} passwordshow={passwordshow} />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-info dark:bg-rose-500 w-full awesome-btn text-center rounded-md py-3 font-bold tracking-wider dark:font-Merienda font-Pt text-[18px] text-white'
            >
              {loading ? <TbFidgetSpinner size={24} className='m-auto animate-spin' /> : 'Continue'}
            </button>
          </div>
        </form>
        {/* <div className='space-y-1'>
          <button onClick={handleResetPassword} className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
            Forgot password?
          </button>
        </div> */}
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          {/* <p className='px-3 text-sm dark:text-white'>
            Login with social accounts
          </p> */}
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <p className='px-6 text-sm text-center text-gray-400 dark:text-white'>
          Don't have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 dark:hover:text-rose-500 dark:text-[#ddd] text-slate-600'
          >
            Sign up
          </Link>

        </p>
      </div>
    </div>
  )
}

export default Login
