import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TbFidgetSpinner } from 'react-icons/tb'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'
import UseAuth from '../../Providers/UseAuth'
import { savedUser } from '../../CommonApi/AuthUserApi'
import PasswordHideShow2 from '../SharedComponents/PasswordHIdeShow2'
import PasswordHideShow from '../SharedComponents/PasswordHideShow'

const SignUp = () => {
  const { createUser, updateUserProfile, loading, setLoading } = UseAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_APIKEY
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`
  const [passwordshow, setPasswordshow] = useState(true)
  const [cpasswordshow, setcpasswordshow] = useState(true)
  const { register, handleSubmit, formState: { errors }, watch, } = useForm()

  const onSubmit = async (data) => {
    // console.log(data, 'data');
    try {
      setLoading(true)
      const imageFile = data.image[0]

      const formData = new FormData()
      formData.append('image', imageFile)

      const response = await fetch(imageHostingUrl, {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      const imageUrl = result.data.url
      const user = await createUser(data.email, data.password)
      if (user) {
        await updateUserProfile(data.name, imageUrl,data.mobile)
        setLoading(false)
        // console.log(`Sign Up Successfully !!!`);
        toast(`Sign Up Successfully !!!`, { autoClose: 2000 });
        // console.log(data,imageUrl);
        savedUser(data,imageUrl)
        setTimeout(() => {
          // navigate(from, { replace: true })
          navigate('/dashboard')
        }, 3000);
      }
    } catch (error) {
      console.error('Image upload error:', error)
      toast.error(error.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }

  }

  const handleShowPassowrd = () => {
    setPasswordshow(!passwordshow)
  }

  const handleShowConfirmPass = () => {
    setcpasswordshow(!cpasswordshow)
  }
  // Custom validation function for Bangladeshi phone numbers
  const validateMobileNumber = (value) => {
    const regex = /^(\+?88)?01[3-9]\d{8}$/; // Regex for Bangladeshi phone numbers
    return regex.test(value) || 'Invalid mobile number';
  };

  return (
    <div className='flex justify-center items-center min-h-screen mt-5'>
      <Helmet>
        <title>Music School || SignUp Page</title>
      </Helmet>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white shadow-md border-rose-500 dark:border-info border-2 text-slate-600  dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728] dark:text-white dark:border-2'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold dark:font-Merienda font-Pt'>Sign Up</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                {...register('name', { required: true })}
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 font-[500] focus:outline-info dark:focus:outline-rose-500 bg-gray-200 text-slate-600'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input type='file' required   {...register('image', { required: true })} name='image' accept='image/*' />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm capitalize'>
                Email address
              </label>
              <input
                type='email'
                {...register('email', { required: true })}
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md normal-case border-gray-300 font-[500] focus:outline-info dark:focus:outline-rose-500 bg-gray-200 text-slate-600'
                data-temp-mail-org='0'
              />
            </div>

            <div>
              <label htmlFor='mobile' className='block mb-2 text-sm'>
                Mobile Number
              </label>
              <input
                type='text' required
                {...register('mobile', {
                  required: 'Only BD Mobile Number is required.',
                  validate: validateMobileNumber,
                })}
                placeholder='+880'
                className='w-full px-3 py-2 border rounded-md border-gray-300 font-[500] focus:outline-info dark:focus:outline-rose-500 bg-gray-200 text-slate-600'
              />
              {errors.mobile && (
                <p className='text-red-500'>{errors.mobile.message}</p>
              )}
            </div>

            <div className='relative'>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type={passwordshow ? 'text' : 'password'}
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                })}
                required
                placeholder='*******'
                className='w-full normal-case px-3 py-2 border rounded-md border-gray-300 font-[500] focus:outline-info dark:focus:outline-rose-500 bg-gray-200 text-slate-600'
              />
              <PasswordHideShow
                handleShowPassowrd={handleShowPassowrd}
                passwordshow={passwordshow}
              />
            </div>
            {errors.password && errors.password.type === 'required' && (
              <p className='text-red-500'>Password is required.</p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <p className='text-red-500'>Password must be at least 6 characters long.</p>
            )}
            {errors.password && errors.password.type === 'pattern' && (
              <p className='text-red-500'>
                Password must contain at least one capital letter and one special character.
              </p>
            )}
            <div className='relative'>
              <div className='flex justify-between'>
                <label htmlFor='confirmPassword' className='text-sm mb-2'>
                  Confirm Password
                </label>
              </div>
              <input
                type={cpasswordshow ? 'text' : 'password'}
                {...register('confirmPassword', {
                  required: 'Confirm Password is required.',
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match.',
                })}
                required
                placeholder='*******'
                className='w-full normal-case px-3 py-2 border rounded-md border-gray-300 font-[500] focus:outline-info dark:focus:outline-rose-500 bg-gray-200 text-slate-600'
              />
              <PasswordHideShow2 cpasswordshow={cpasswordshow} handleShowConfirmPass={handleShowConfirmPass} />

            </div>
            {errors.confirmPassword && (
              <p className='text-red-500'>{errors.confirmPassword.message}</p>
            )}
            {/* ====show error===== */}
          </div>

          <div>
            <button
              type='submit'
              className='bg-info dark:bg-rose-500 w-full awesome-btn text-center rounded-md py-3 text-white'
            >
              {loading ? (
                <TbFidgetSpinner size={24} className='m-auto animate-spin' />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          {/* <p className='px-3 text-sm text-slate-600 dark:text-white dark:font-Merienda font-Pt tracking-wider'>
            Signup with social accounts
          </p> */}
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <p className='px-6 text-sm text-center text-slate-500 dark:text-white'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline  hover:text-rose-500 dark:hover:text-rose-500 dark:text-[#ddd] text-slate-600'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp