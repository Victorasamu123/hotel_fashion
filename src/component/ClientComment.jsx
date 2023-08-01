import React from 'react'
import "../styles/ClientComment.css"
import stars from "../assets/Group-31.svg"
import arrowOoO from "../assets/material-symbols_chevron-right-rounded.svg"
const ClientComment = () => {
  return (
    <>
      <div className='conTainer'>
        <p className='whatClientSay'>What Our Clients Are Saying About Us</p>
        <div className='commentContainer'>
          <div className='firstComment' data-aos="fade-down"
     data-aos-easing="linear">
            <div className='headersContainer'>
            <p className='manager'>Manager, The Vineyard</p>
            <img src={stars} alt="" />
            </div>
            <p className='textDown'>
            “Our collaboration with Hotels Fashion has been a game-changer for us. The unique and beautifully designed products showcased in our hotel have received an overwhelmingly positive response from our guests”
            </p>
          </div>
          <div className='secondComment' data-aos="fade-right"
     data-aos-easing="ease-in-sine">
          <div className='headersContainer'>
            <p className='manager'>Manager, Tobams Colors</p>
            <img src={stars} alt="" />
            </div>
            <p className='textDown'>
            "Hotels Fashion has provided an incredible platform for me to showcase my designs to a wider audience. The exposure and recognition I have gained through their hotel partnerships have been invaluable. They truly appreciate the work of designers”
            </p>
          </div>
          <div className='thirdComment'  data-aos="fade-up" data-aos-easing="ease-in-sine"> 
          <div className='headersContainer'>
            <p className='manager'>Manager, Collxx</p>
            <img src={stars} alt="" />
            </div>
            <p className='textDown'>
             "As a designer, partnering with Hotels Fashion has been a rewarding experience. The opportunity to display my products in prestigious hotels has increased my brand visibility and boosted sales. Hotels Fashion has connected me with hotel clients”
            </p>
          </div>
        </div>
        <div className='wrapperTwo'>
        <div className='viewAllDiv'>
             <p className='viewAllText'>View All</p>
             <img src={arrowOoO} alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default ClientComment;