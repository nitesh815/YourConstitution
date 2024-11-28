import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)


  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 180) { // Adjust the 100 value as per your needs
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>

            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/leaderboard'>LeaderBoard</Link>
            </li>
          </ul>
          <Link to="/Gainrewards">          
          <div className='start'>
            <div className='button'>GAIN REWARDS</div>
          </div>
          </Link>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
        <div className={`navbar ${isFixed ? "navbar-fixed" : "hide"}`}>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/Login'>Team</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
              </li>
              <li>
              <Link to='/leaderboard'>LeaderBoard</Link>
            </li>
          </ul>
          <Link to="/Gainrewards">          
          <div className='start'>
            <div className='button'>GAIN REWARDS</div>
          </div>
          </Link>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
          </nav>
          </div>
      </header>
    </>
  )
}

export default Header
