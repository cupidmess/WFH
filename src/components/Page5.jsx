import React from 'react'
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import "../styles/Page5.css"
export default function Page5() {
  const [skills, setSkills] = useState('');
  const navigate= useNavigate()
  const handleInputChange = (e) => {
    setSkills(e.target.value);
  };
  const handleNextClick = async(e) => {
    navigate("/page6")
  }
  const handleBackClick = async(e) => {
    navigate("/page4")
  }
  return (
    <div>
      <div className='body-05'>
      <div className="form-container-05">
      <div className="skill-entry-05">
        <div className="progress-indicator-05">3/3</div>
        <h2 className='h2-05'>Enter your skills.</h2>
        <div className="li-05"></div>
        <p className="description-05">
          Your skills show clients what you can offer, and help us choose which jobs to recommend to you. 
          Add or remove the ones we've suggested, or start typing to pick more. It's up to you.
        </p>
        <label className='label-05'>Your skills</label>
        <input
          type="text"
          id="skills-05"
          className="skill-input-05"
          placeholder="Java"
          value={skills}
          onChange={handleInputChange}
        />
      </div>

      <div className="suggestion-card-05">
        <div className="profile-05">
          <div className="profile-image-05">
          <img src="https://via.placeholder.com/40" alt="profile" />
          </div>
          <div className="profile-details-05">
            <h3>Angad Shinde</h3>
            <p>AI/ML Developer</p>
          </div>
        </div>
        <p className="suggestion-text-05">
          "BGD's algorithm will recommend specific job posts to you based on your skills. 
          So choose them carefully to get the best match!"
        </p>
      </div>

      {/* Bottom buttons */}
     
    </div>
      </div>
      <div className="form-buttons-05">
        <button className="back-button-05" onClick={handleBackClick}>Back</button>
        <button className="next-button-05"onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}