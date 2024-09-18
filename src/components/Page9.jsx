import React from 'react'
import "../styles/Page9.css"
import {useNavigate} from "react-router-dom"
export default function Page9() {
  const navigate = useNavigate()
  const handleNextClick = async(e) => {
    navigate("/mp")
  } 
  return (
    <div className='body-09'>
      <div className="contain-09">
    <header className="h-09">
      <p className="st-09">3/3</p>
      <h2 className="head-09">Almost there!</h2>
      <hr className="l-09"></hr>
    </header>

    <main className="main-09">
        <div className="profile-09"></div>
        <div box1>
        <p className="date-09">Date of Birth</p>
        <input type="text" placeholder="yyyy-mm-dd" className="dob-09"></input>
        <p className="street-09">Street Address</p>
        <input type="text" placeholder="Address" className="street-input-09"></input>
      <div className="box2">
        <div>
        <p className="pin-09">PIN</p>
        <input type="text" placeholder="pincode" className="pin-input-09"></input>
        </div>
       <div>
       <p className="city-09">City</p>
       <input type="text" placeholder="City" className="city-input-09"></input>
       </div>
      </div>
        </div>
    </main>
    <footer className="foot-09">
          <button className="btn-09" onClick={handleNextClick}>LET'S GO</button>
    </footer>
  </div>
    </div>
  )
}