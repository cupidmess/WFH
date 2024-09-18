import React from 'react'
import "../styles/Page7.css"
import {useNavigate} from "react-router-dom"
export default function Page7() {
  const navigate = useNavigate()
  const handleNextClick = async(e)=> {
    navigate("/page8")
  }
  const handleBackClick = async(e) => {
    navigate("/page6")
  }
  return (
    <div>
      <div className='body-07'>
      <div className="experience-container-07">
      <div className="header-07">
        <span>3/3</span>
        <h2>Enter your educational details.</h2>
      </div>
      <hr className="Line-07"></hr>

      <div className="add-experience-card-07">
        <div className="add-button-07">
          <span>+</span>
        </div>
        <p className="Add-07">ADD EDUCATION</p>
      </div>

      <div className="footer-07">
        <button className="back-button-07" onClick={handleBackClick}>BACK</button>
        <div className="footer-right-07">
          <button className="skip-button-07" onClick={handleNextClick}>SKIP</button>
          <button className="next-button-07" onClick={handleNextClick}>NEXT</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
  
}