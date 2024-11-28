import React from "react";
import Sidebar from "../module/Sidebar";
import Back from "../common/back/Back";
import "./scrollable.css"

const Video = () => {
    return (
        <>
            <Back title='Introduction to the Constitution' />

            <div class="flex">
                <Sidebar />
                <div className='container scrol ' style={{margin:"20px"}}>
                    <>
                        <div className="video">
                            <h2 style={{marginBottom:"10px"}}>
                                Constitution 01 | Introduction : Historical Background of The Constitution
                            </h2>
                            <h4>About this Lecture:</h4>
                            <p>In this informative video, we dive deep into the intricacies of the Constitution, uncovering its historical background, key features, and enduring impact.</p>
                            <iframe width="800" height="400" src="https://www.youtube.com/embed/aE6Pdy-Bs6g?si=5RMOUyluguNguBAq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="margin5"></div>
                        <div className="video">
                            <h2 style={{ marginBottom: "10px" }}>
                                Constitution 02 | Nature Of The Indian Constitution
                            </h2>
                            <h4>About this Lecture:</h4>
                            <p>Do you want to learn about the Indian Penal Code (IPC)? Do you want to understand the legal framework and the criminal justice system in India? If so, this video is for you!
                                In this informative and educational video, we'll provide you with a comprehensive overview of the IPC.</p>
                            <iframe width="800" height="400" src="https://www.youtube.com/embed/7-yrvYPSWIE?si=2tjniaT-dHQGbh9l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        </div>
                    </>
                </div>
            </div>
        </>
    )
}
export default Video;