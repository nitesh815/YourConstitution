import { Link } from "react-router-dom"
import React from "react"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>APKA SAMVIDHAN</h1>
            <span>KNOW OUR CONSTITUTION</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
            <Link to="/Login"><button className='primary-btn' style={{marginLeft:"50px"}}>
                 Login
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
