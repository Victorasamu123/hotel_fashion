import React from 'react'
import "../styles/HotelStyle.css"
import Header from '../component/Header';
const Hotel = () => {
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
              </div>
              <div className='secondInput'>
              </div>
              <div className='searchButton'>
              </div>
            </div>
           </div>
         </div>
        </section>
      </main>
    </>
  )
}

export default Hotel;