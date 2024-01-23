import React from 'react'
import HomeSlider from '../../Components/HomeSlider/HomeSlider'
import HouseSearch from '../../Components/HouseSearch/HouseSearch'

const HomePage = () => {
  return (
    <>
      <HomeSlider />
      <div className="mt-[450px]">
      <HouseSearch/>
      </div>
    </>
  )
}

export default HomePage