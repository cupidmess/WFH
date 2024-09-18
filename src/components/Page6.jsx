import React from 'react'
import "../styles/Page6.css"
import {useNavigate} from "react-router-dom"
export default function Page6() {
  const navigate = useNavigate(); 
  const handleNextClick = async(e) => {
    navigate("/page7")
  }
  const handleBackClick = async(e) => {
    navigate("/page6")
  }
  return (
    <div>
      <div className='body-06'>
      <div className="experience-container-06">
      <div className="header-06">
        <span>3/3</span>
        <h2>Enter your experience.</h2>
      </div>
      <hr className="Line-06"></hr>

      <div className="add-experience-card-06">
        <div className="add-button-06">
          <span>+</span>
        </div>
        <p className="Add-06">ADD EXPERIENCE</p>
      </div>

      <div className="footer-06">
        <button className="back-button-06" onClick={handleBackClick}>BACK</button>
        <div className="footer-right-06">
          <button className="skip-button-06" onClick={handleNextClick}>SKIP</button>
          <button className="next-button-06" onClick={handleNextClick}>NEXT</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}