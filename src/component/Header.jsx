import React from 'react'
import "../styles/HeaderStyler.css"
import logo from "../assets/logo_fashion.svg"
import flag from '../assets/circle-flags_uk.svg'
import profile from "../assets/ri_account-circle-line.svg"
import arrowDown from "../assets/arrow_down.svg"
const Header = () => {
  return (
    <section className='headerContainer'>
        <div className='logoContainer'>
        <img src={logo} alt="" />
        </div>
        <div>
          <ul className='listContainer'>
            <li className='listItems'>Hotel</li>
            <li className='listItems'>Brand</li>
            <li className='listItems'>About Us</li>
            <li className='listItemsTwo'>How It Works <img src={arrowDown} alt="" /></li>
            <li className='listItems'>Pricing</li>
            <li className='listItems'>Contact</li>
          </ul>
        </div>
        <div className='imgContainer'>
         <img src={flag} alt="" />
         <img src={profile} alt="" />
        </div>
    </section>
  )
}

export default Header;