import React from 'react'
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
HeroBanner
import Trending from './trending/Trending';
const home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending/>
    </div>
  )
}

export default home