import React from 'react'
import "../styles/Footer.css"
import fb from "../assets/eva_facebook-fill.svg"
import ln from "../assets/formkit_linkedin.svg"
import ins from "../assets/mdi_instagram.svg"
import tw from "../assets/mdi_twitter.svg"
const Footer = () => {
  return (
    <>
      <div className='footerContainer'>
         <div className='subContainerFooter'>
            <div>
                <p className='subHeaderFooter'>Helpful Tips</p>
                <p className='subBodyFoot'>How it Works</p>
                <p className='subBodyFoot'>Rent Space</p>
                <p className='subBodyFoot'>Hotels Dashboard</p>
                <p className='subBodyFoot'>Trending Hotels</p>
                <p className='subBodyFoot'>Verified Brands</p>
            </div>
            <div>
                <p className='subHeaderFooter'>Quicklinks</p>
                <p className='subBodyFoot'>About Us</p>
                <p className='subBodyFoot'>FAQs</p>
                <p className='subBodyFoot'>Term of Service</p>
                <p className='subBodyFoot'>Private Policy</p>
                <p className='subBodyFoot'>Cookie Policy</p>
            </div>
            <div>
                <p className='subHeaderFooter'>Discover</p>
                <p className='subBodyFoot'>City Guide</p>
                <p className='subBodyFoot'>Blog</p>
                <p className='subBodyFoot'></p>
                <p className='subBodyFoot'>Reviews</p>
                <p className='subBodyFoot'>Event</p>
            </div>
            <div>
                <p className='thirdSubBody'>Get updates about available spaces, weekly digest of our most <br /> important activities and more in your email</p>
                <div className='' style={{display:"flex",gap:"10px"}}>
                    <input type="text" placeholder='Enter Your Email Address' className='inputFooter'/>
                    <button className='footerButton'>Subscribe</button>
                </div>
                <p className='contactFooter'>mailto:theteam@hotelsfashion.com</p>
                <div className='socialFooter' style={{display:"flex",marginTop:"16px"}}>
                    <img src={fb} alt="" />
                    <img src={ln} alt="" style={{marginLeft:"15px"}}/>
                    <img src={ins} alt="" style={{marginLeft:"15px"}}/>
                    <img src={tw} alt="" style={{marginLeft:"15px"}}/>
                </div>
            </div>
         </div>
         <div className='footerFooter'>
         <p className='textFooterf'>Hotel Fashion @ {2023}. All Right Reserved.</p>
         </div>
      </div>
    </>
  )
}

export default Footer;