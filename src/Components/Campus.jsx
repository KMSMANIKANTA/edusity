import React from 'react'
import Title from './Title'
import './Campus.css'
import gallery_1 from '../assets/gallery-1.png'
import gallery_2 from '../assets/gallery-2.png'
import gallery_3 from '../assets/gallery-3.png'
import gallery_4 from '../assets/gallery-4.png'
const Campus = () => {
  return (
    <>
    <Title title={'Gallery'} subtitle={'gallery Photos'}></Title>
    <div className='gallery'>
      <img src={gallery_1} alt="" />  
      <img src={gallery_2} alt="" />
      <img src={gallery_3} alt="" />
      <img src={gallery_4} alt="" />
      
      <img src={gallery_1} alt="" />  
      <img src={gallery_2} alt="" />
      <img src={gallery_3} alt="" />
      <img src={gallery_4} alt="" />
    </div>
    </>
  )
}

export default Campus