import React, { useState } from "react";
import "./courses.css";

import { coursesCard } from "../../dummydata";
import { Link } from 'react-router-dom';

const CoursesCard = () => {
  const [name, setName] = useState(null);  // Initialize state

  const clicking = (m) => {
    setName(m);  // Update state with clicked value
  };


  return (
    <>
      <section className='coursesCard contain'>
        <div className='container grid3'>
          {coursesCard.map((val, index) => (
            <div className='items' key={index} onClick={() => clicking(val.coursesName)}>
              <Link to={val.returnpath} style={{ textDecoration: 'none' }} onClick={() => clicking(val.coursesName)}>
                <div className='content flex'>
                  <div className='left'>
                    <div className='img'>
                      <img src={val.cover} alt={val.coursesName} />
                    </div>
                  </div>
                  <div className='text'>
                    <h1>{val.coursesName}</h1>

                    <div className='details'>
                      {val.courTeacher.map((details, i) => (
                        <span key={i}>{details.totalTime}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='price'>
                  {/* Price or any other content here */}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Display clicked course name */}
        {name && <p>You clicked on: {name}</p>}
      </section>
    </>
  );
};

export default CoursesCard;