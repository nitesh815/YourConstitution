import React from 'react';
import './GainRewards.css';
import { Link } from 'react-router-dom';  


const GainRewards = () => {
    return (
        <div className="rewards-container">
            <h1 className="rewards-header">Gain Rewards</h1>
            <p className="rewards-description">
                Unlock amazing rewards by completing challenges and activities!
            </p>
            <div className="progress-tracker">
                <h2 className="tracker-title">Your Progress</h2>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '70%' }}></div>
                </div>
                <p className="progress-text">70% to next reward</p>
            </div>
            <div className="reward-categories">
                <h2 className="categories-title">Rewards Available</h2>
                <div className="reward-card">
                    <h3 className="card-title">Complete Courses</h3>
                    <p className="card-details">Finish 5 courses to earn a special badge!</p>
                    <button className="reward-button">Claim Reward</button>
                </div>
                <div className="reward-card">
                    <h3 className="card-title">Refer Friends</h3>
                    <p className="card-details">Invite a friend and earn bonus points!</p>
                    <button className="reward-button">Claim Reward</button>
                </div>
                <div className="reward-card">
                    <h3 className="card-title">Daily Login</h3>
                    <p className="card-details">Log in for 7 consecutive days to earn exclusive perks!</p>
                    <button className="reward-button">Claim Reward</button>
                </div>
            </div>
            <div className="crossword-rewards">
                <h2 className="crossword-title">Crossword Challenge</h2>
                <p className="crossword-details">Solve a crossword puzzle to gain:</p>
                <div className="crossword-points">
                    <span className="points">10 Points</span>
                </div>
                <Link to="/crossword">
                <button className="reward-button">Start Crossword</button>
                </Link>
            </div>
        </div>
    );
};

export default GainRewards;


