import React from 'react'
import { useState } from 'react'
import "../styles/Page8.css"
import {useNavigate} from "react-router-dom"
export default function Page8() {
  const [skills, setSkills] = useState('');
  const navigate = useNavigate()
  const handleNextClick = async(e)=> {
    navigate("/page9")
  }
  const handleBackClick = async(e) => {
    navigate("/page7")
  }
  const handleInputChange = (e) => {
    setSkills(e.target.value);
  };
  return (
    <div className='body-08'>
      <div className="form-container-08">
      <div className="skill-entry-08">
        <div className="progress-indicator-08">3/3</div>
        <h2>Great. Now give a brief introduction about yourself.</h2>
         <hr className="l1-08"></hr>
        <label className="skill-08">TITLE</label>
        <input
          type="text"
          id="skills"
          className="skill-input-08"
          placeholder="Java"
          value={skills}
          onChange={handleInputChange}
        />

<label className="bio-skill-08">BIO</label>
        <input
          type="text"
          id="bio"
          className="bio-input-08"
          placeholder="Write about yourself..."
          value={skills}
          onChange={handleInputChange}
        />
        <div className="b-08">
        <p className="atleast-08">Atleast 100 characters</p>
        </div>
      </div>

      <div className="suggestion-card-08">
        <div className="profile-08">
          <div className="profile-image-08">
            <img src="https://via.placeholder.com/40" alt="profile" />
          </div>
          <div className="profile-details-08">
            <h3>Harshada A</h3>
            <p>AI/ML Developer</p>
          </div>
        </div>
        <p className="suggestion-text-08">
          I'm a developer experienced in building websites for small and medium size buisnesess, Wether you are tring to win  work list your services or create a new online store. I can help.
          <p className="learn-08">Knows HTML,CSS3,jQuery,WordPress and SEO</p>
        </p>
      </div>

      {/* Bottom buttons */}
      <div className="form-buttons-08">
        <button className="back-button-08" onClick={handleBackClick}>Back</button>
        <button className="next-button-08" onClick={handleNextClick}>SET PROFILE</button>
      </div>
    </div>
    </div>
  )
}