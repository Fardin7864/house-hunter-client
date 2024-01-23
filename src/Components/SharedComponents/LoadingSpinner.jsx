import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-screen relative -top-28'>
      <ThreeCircles
        height="100"
        width="100"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#e63946"
        innerCircleColor="#1d3557"
        middleCircleColor="#457b9d"
      />
    </div>
  )
}

export default LoadingSpinner