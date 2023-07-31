import React from 'react'
import "../styles/Exclusive.css"
import exclusiveBrand from "../assets/exclusiveBrand.png"
import arrow from "../assets/ei_arrow-right.svg"
const ExclusiveBrand = () => {
  return (
    <>
      <div className='containerDivC'>
       <p className='pVerifiedText'>Meet Our Verified Exclusive Brands</p>
       <div className='subContainer'>
         <img src={exclusiveBrand} alt=""/>
         <div className='exclusiveTextContainer'>
             <p className='firstText'>
                Exceptional Brands
             </p>
             <p className='secondText'>
                Exclusive Brands
             </p>
             <p className='secondText'>
                Verified for Quality Services
             </p>
             <div className='learnMore'>
                <p className='learnMoreText'>Learn More</p>
                <img src={arrow} alt="" />
             </div>
         </div>
       </div>
      </div>
    </>
  )
}

export default ExclusiveBrand;