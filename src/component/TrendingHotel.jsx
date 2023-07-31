import React, { useEffect } from 'react'
import "../styles/TrendingHotel.css"
import heart from "../assets/majesticons_heart.svg"
import arrowLeft from "../assets/formkit_left.svg"
import arrowRight from "../assets/formkit_right.svg"
import location from "../assets/material-symbols_location-on.svg"
import star from "../assets/star.svg"
import arrowOoO from "../assets/material-symbols_chevron-right-rounded.svg"
// import AOS from "aos"
// import "aos/dist/aos.css"
const TrendingHotel = () => {
    // useEffect(() => {
    //   AOS.init({duration:2000})
    // }, [])
    
  return (
    <>
     <div className='containerDiv'>
        <h2 className='headerTextForHotels'>Trending Hotels</h2>
        <p className='pTextForHotel'>Experience Luxury beyond your expectations in the lap of nature</p>
        <div className='hotelCarrierOne'>
           <div id='one' className='hotelOne' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelOneImage'>
                <img src={heart} alt="" className='heartIcon'/>
                <div className='iconCarrier'>
                    <div className='arrowLeft'>
                      <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrowLeft'>
                      <img src={arrowRight} alt="" />
                    </div>
                </div>
              </div>
              <div>
                <p className='vineyard'>The Vineyard</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Berkshire</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>5.0</p>
                  </div>
                </div>
                  <p className='fully-booked'>Fully Booked</p>
                  <p className='prize'>From <span className='prizeBold'>£70.00</span>/day</p>
              </div>
           </div>
           <div id='two' className='hotelTwo' data-aos="fade-zoom-in"  data-aos-easing="ease-in-sine">
              <div className='hotelTwoImage'>
                <img src={heart} alt="" className='heartIcon'/>
                <div className='iconCarrier'>
                    <div className='arrowLeft'>
                      <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrowLeft'>
                      <img src={arrowRight} alt="" />
                    </div>
                </div>
              </div>
              <div>
                <p className='vineyard'>Grand Hotel</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Sunderland</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.8</p>
                  </div>
                </div>
                  <p className='fully-booked'>Space Available</p>
                  <p className='prize'>From <span className='prizeBold'>£65.00</span>/day</p>
              </div>
           </div>
           <div id='three' className='hotelTwo' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelThreeImage'>
                <img src={heart} alt="" className='heartIcon'/>
                <div className='iconCarrier'>
                    <div className='arrowLeft'>
                      <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrowLeft'>
                      <img src={arrowRight} alt="" />
                    </div>
                </div>
              </div>
              <div>
                <p className='vineyard'>Hambleton Hall</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Ruth land</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.5</p>
                  </div>
                </div>
                  <p className='fully-booked'>Fully Booked</p>
                  <p className='prize'>From <span className='prizeBold'>£50.00</span>/day</p>
              </div>
           </div>
           <div id='four' className='hotelTwo' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelFourImage'>
                <img src={heart} alt="" className='heartIcon'/>
                <div className='iconCarrier'>
                    <div className='arrowLeft'>
                      <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrowLeft'>
                      <img src={arrowRight} alt="" />
                    </div>
                </div>
              </div>
              <div>
                <p className='vineyard'>The Lowry Hotel</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Lancaster</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>5.0</p>
                  </div>
                </div>
                  <p className='fully-booked'>Fully Booked</p>
                  <p className='prize'>From <span className='prizeBold'>£65.00</span>/day</p>
              </div>
           </div>
        </div>
        <div className='hotelCarrierOne'>
           <div id='one' className='hotelOne' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelOneImageOne'>
                <img src={heart} alt="" className='heartIcon'/>
                <div className='iconCarrier'>
                    <div className='arrowLeft'>
                      <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrowLeft'>
                      <img src={arrowRight} alt="" />
                    </div>
                </div>
              </div>
              <div>
                <p className='vineyard'>Ten Hill Palace Hotel</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Edinburgh</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.7</p>
                  </div>
                </div>
                  <p className='fully-booked'>Fully Booked</p>
                  <p className='prize'>From <span className='prizeBold'>£80.00</span>/day</p>
              </div>
           </div>
           <div id='two' className='hotelTwo' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelTwoImageOne'>
                <img src={heart} alt="" className='heartIcon'/>
                <div className='iconCarrier'>
                    <div className='arrowLeft'>
                      <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrowLeft'>
                      <img src={arrowRight} alt="" />
                    </div>
                </div>
              </div>
              <div>
                <p className='vineyard'>Blythswood Square Hotel</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Glasgow</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.9</p>
                  </div>
                </div>
                  <p className='fully-booked'>Fully Booked</p>
                  <p className='prize'>From <span className='prizeBold'>£80.00</span>/day</p>
              </div>
           </div>
           <div id='three' className='hotelTwo' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelThreeImageOne'>
                <img src={heart} alt="" className='heartIcon'/>
                <div className='iconCarrier'>
                    <div className='arrowLeft'>
                      <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrowLeft'>
                      <img src={arrowRight} alt="" />
                    </div>
                </div>
              </div>
              <div>
                <p className='vineyard'>Hotel Felix</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Cambridge</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.5</p>
                  </div>
                </div>
                  <p className='fully-booked'>Fully Booked</p>
                  <p className='prize'>From <span className='prizeBold'>£75.00</span>/day</p>
              </div>
           </div>
           <div id='four' className='hotelTwo' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelFourImageOne'>
                <img src={heart} alt="" className='heartIcon'/>
                <div className='iconCarrier'>
                    <div className='arrowLeft'>
                      <img src={arrowLeft} alt="" />
                    </div>
                    <div className='arrowLeft'>
                      <img src={arrowRight} alt="" />
                    </div>
                </div>
              </div>
              <div>
                <p className='vineyard'>St James Hotel</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>London</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.6</p>
                  </div>
                </div>
                  <p className='fully-booked'>Fully Booked</p>
                  <p className='prize'>From <span className='prizeBold'>£65.00</span>/day</p>
              </div>
           </div>
        </div>
        <div className='wrapper'>
        <div className='viewAllDiv'>
             <p className='viewAllText'>View All</p>
             <img src={arrowOoO} alt="" />
        </div>
        </div>
     </div>
    </>
  )
}

export default TrendingHotel;