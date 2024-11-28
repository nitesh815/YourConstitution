import React from "react"
import Back from "../common/back/Back"
// import TeamCard from "../team/TeamCard"
// import Awrapper from "../about/Awrapper"
import Sidebar from "./Sidebar"
import Quiz from "./quiz"
import "./quiz.css"

const Quizpage = () => {
  return (
    <>
      <Back title='Introduction to Constitution' />
      
        <div class="flex">
      <Sidebar/>
        <div className='container5'>
        <>
        <div className="container1">
        <Quiz/>
        </div>
        </>
        </div>
        </div>
    </>
  )
}

export default Quizpage