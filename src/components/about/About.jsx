import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <>
      <div className="mar">   <Back title='About Us' /></div>
   
      <div className="margin3">
        <AboutCard />
      </div> 
     
    </>
  )
}

export default About
