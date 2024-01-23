import { HashLoader  } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[70vh]
      flex
      flex-col
      justify-center
      items-center
    '
    >
      <HashLoader  size={50} color='#FEA1A1' />
    </div>
  )
}

export default Loader
