import React from 'react'
import DesktopImage from '../images/image-product-desktop.jpg'
import MobileImage from '../images/image-product-mobile.jpg'

export const ImageComponent = () => {
  return (
    <div>
        <img src={DesktopImage} className='desktop-img' alt='gabrielle essence perfume'/>
        <img src={MobileImage} className='mobile-img' alt='mobile gabrielle essence perfume'/>
    </div>
  )
}
