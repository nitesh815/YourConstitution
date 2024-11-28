import React from "react"
import Back from "../common/back/Back"
// import TeamCard from "../team/TeamCard"
// import Awrapper from "../about/Awrapper"
import Sidebar from "./Sidebar"
import Mabout from "./MAbout"
import "./quiz.css"

const Module = () => {
  return (
    <>
      <Back title='Introduction to The Constitution ' />

      <div class="flex">
        <Sidebar />
        <div className='container3 margin5'>

          <>
          <Mabout/>  
          </>
        </div>
      </div>
    </>
  )
}

export default Module
