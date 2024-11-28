import React from "react";
import Back from "../common/back/Back";
import "../about/about.css";
import "../leaderboard/Leaders.css"; 
const LeaderboardItem = ({ rank, name, designation, stars, score, imgSrc, medal }) => (
  <div className="leaderboard-item">
    <div className="flex items-center">
      <div className="text-2xl font-bold mr-4">{medal}</div>
      <img src={imgSrc} alt={`${name} profile`} />
      <div className="info ml-4">
        <div className="name">{name}</div>
        <div className="designation">{designation}</div>
      </div>
    </div>
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className={`fa${i < stars ? 's' : 'r'} fa-star`}></i>
      ))}
    </div>
    <div className="score">{score}</div>
  </div>
);
const Leaders = () => {
  return (
    <>
      <Back title='Leaderboard' />
      <section className='team padding'>
        <div className="container grid5 leaderboard">
          <div className="leaderboard-header">TEAM LEADERBOARD</div>
          <LeaderboardItem
            rank={1}
            name="Mahima Yadav"
            designation="Student at KIET"
            stars={4}
            score={5648}
            imgSrc="https://placehold.co/40x40"
            medal={<i className="fas fa-medal text-yellow-500"></i>}
          />
          <LeaderboardItem
            rank={2}
            name="Meenakshi Srivastava"
            designation="A civic student"
            stars={4}
            score={6842}
            imgSrc="https://placehold.co/40x40"
            medal={<i className="fas fa-medal text-gray-400"></i>}
          />
          <LeaderboardItem
            rank={3}
            name="Nitesh Srivastava"
            designation="Constitution student"
            stars={3}
            score={3549}
            imgSrc="https://placehold.co/40x40"
            medal={<i className="fas fa-medal text-orange-500"></i>}
          />
          <LeaderboardItem
            rank={4}
            name="Priya Singh"
            designation="Designation"
            stars={3}
            score={2159}
            imgSrc="https://placehold.co/40x40"
            medal={<span className="text-2xl font-bold">4</span>}
          />
          <LeaderboardItem
            rank={5}
            name="Harsh Singh"
            designation="Designation"
            stars={2}
            score={4537}
            imgSrc="https://placehold.co/40x40"
            medal={<span className="text-2xl font-bold">5</span>}
          />
        </div>
      </section>
    </>
  );
};

export default Leaders;

