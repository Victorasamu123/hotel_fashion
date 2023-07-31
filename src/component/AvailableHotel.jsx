import React from 'react'
import "../styles/TrendingHotel.css"
import heart from "../assets/majesticons_heart.svg"
import arrowLeft from "../assets/formkit_left.svg"
import arrowRight from "../assets/formkit_right.svg"
import location from "../assets/material-symbols_location-on.svg"
import star from "../assets/star.svg"
import arrowOoO from "../assets/material-symbols_chevron-right-rounded.svg"
import "../styles/AvailableHotel.css"
const AvailableHotel = () => {
  return (
    <>
     <div className='containerDivA'>
        <h2 className='headerTextForHotels'>Available Hotel Spaces</h2>
        <p className='pTextForHotel'>Unlock Your Creative Haven: get Your Dream Space today</p>
        <div className='hotelCarrierOne'>
           <div id='one' className='hotelOne' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelOnePImage'>
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
                <p className='vineyard'>Hotel Star</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Brighton</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>5.0</p>
                  </div>
                </div>
                  <p className='fully-booked'>Space Available</p>
                  <p className='prize'>From <span className='prizeBold'>£90.00</span>/day</p>
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
                    <p className='star'>4.0</p>
                  </div>
                </div>
                  <p className='fully-booked'>Space Available</p>
                  <p className='prize'>From <span className='prizeBold'>£55.00</span>/day</p>
              </div>
           </div>
           <div id='three' className='hotelTwo' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelThreePImage'>
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
                <p className='vineyard'>Mandarin Oriental</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Barcelona</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.6</p>
                  </div>
                </div>
                  <p className='fully-booked'>Space Available</p>
                  <p className='prize'>From <span className='prizeBold'>£60.00</span>/day</p>
              </div>
           </div>
           <div id='four' className='hotelTwo' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelFourPImage'>
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
                <p className='vineyard'>Ballathie House Hotel</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Scotland</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.5</p>
                  </div>
                </div>
                  <p className='fully-booked'>Space Available</p>
                  <p className='prize'>From <span className='prizeBold'>£50.00</span>/day</p>
              </div>
           </div>
        </div>
        <div className='hotelCarrierOne'>
           <div id='one' className='hotelOne' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelOneImageOneP'>
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
                <p className='vineyard'>The Westin Valencia</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Valencia</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.4</p>
                  </div>
                </div>
                  <p className='fully-booked'>Space Available</p>
                  <p className='prize'>From <span className='prizeBold'>£55.00</span>/day</p>
              </div>
           </div>
           <div id='two' className='hotelTwo' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelTwoImageOneP'>
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
                <p className='vineyard'>Four Seasons Hotel</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Madrid</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.6</p>
                  </div>
                </div>
                  <p className='fully-booked'>Space Available</p>
                  <p className='prize'>From <span className='prizeBold'>£60.00</span>/day</p>
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
                    <p className='location'>Berkshire</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.5</p>
                  </div>
                </div>
                  <p className='fully-booked'>Space Available</p>
                  <p className='prize'>From <span className='prizeBold'>£65.00</span>/day</p>
              </div>
           </div>
           <div id='four' className='hotelTwo' data-aos="fade-zoom-in" data-aos-easing="ease-in-sine">
              <div className='hotelFourImageOneP'>
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
                <p className='vineyard'>Reina Isabel</p>
                <div className='locationAndStarDiv'>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={location} alt="" />
                    <p className='location'>Las Palmas</p>
                  </div>
                  <div style={{display:"flex", alignItems:"center"}}>
                    <img src={star} alt="" />
                    <p className='star'>4.5</p>
                  </div>
                </div>
                  <p className='fully-booked'>Space Available</p>
                  <p className='prize'>From <span className='prizeBold'>£60.00</span>/day</p>
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

export default AvailableHotel;