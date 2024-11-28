import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./ScenarioGame.css"
import Sidebar from "../module/Sidebar";
import dummyScenarios from './dummyScenarios';

const Scenarios = () => {
    return (
       
      <>
            <Back title="Introduction to the Constitution" />

                <div class="flex">
                    <Sidebar />
                    <div class="container5">
                        <>
                            <div >
                                <BlogCard scenarios={dummyScenarios} />
                            </div>
                        </>
                    </div>
                </div>
        
        
       
        </>
    )
}

export default Scenarios;





