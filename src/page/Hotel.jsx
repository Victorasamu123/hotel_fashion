import React from 'react'
import "../styles/HotelStyle.css"
import Header from '../component/Header';
import {AiOutlineSearch} from "react-icons/ai"
import arrowDown from "../assets/arrow_down.svg"
import TrendingHotel from '../component/TrendingHotel';
import TrendingBrand from '../component/TrendingBrand';
import ExclusiveBrand from '../component/ExclusiveBrand';
import AvailableHotel from '../component/AvailableHotel';
import ClientComment from '../component/ClientComment';
const Hotel = () => {
  const iconStyle= {
      width: "24px",
      height:"24px",
      color:"#666666"
  }
  const iconStyleTwo= {
      width: "48px",
      height:"48px",
      color:"white"
  }
  return (
    <>
      <main>
        <section className='bodyStyle'>
         <Header/>
         {/* hero section */}
         <div className='heroSectionContainer'>
           <div className='heroSectionItemContainer'>
            <p className='firstPHero'>FIND A HOME FOR YOUR DESIGNS</p>
            <p className='secondPHero'>Pop Ups In Top Class Hotels Around The World</p>
            <div className='heroSectionInputContainer'>
              <div className='firstInput'>
               <AiOutlineSearch style={iconStyle}/>
               <p className='textInputOne'>Find a space</p>
              </div>
              <div className='secondInput'>
                <p className='textInputTwo'>Duration</p>
                <img src={arrowDown} alt="" />
              </div>
              <div className='searchButton'>
              <AiOutlineSearch style={iconStyleTwo}/>
              </div>
            </div>
           </div>
         </div>
         <TrendingHotel/>
         <TrendingBrand/>
         <ExclusiveBrand/>
         <AvailableHotel/>
         <ClientComment/>
        </section>
      </main>
    </>
  )
}

export default Hotel;