import { FaEye, FaEyeSlash } from 'react-icons/fa'
const PasswordHideShow2 = ({handleShowConfirmPass,cpasswordshow}) => {
  return (
    <>
      <p onClick={handleShowConfirmPass} className='cursor-pointer absolute right-4 top-[37px]'>{cpasswordshow ? <FaEye size={24} className='hover:text-neutral-600 text-neutral-800' /> : <FaEyeSlash size={24} className='hover:text-neutral-600 text-neutral-800' />}</p>
    </>
  )
}

export default PasswordHideShow2
