import React from 'react' ;
import "../styles/Main_Page.css"
import bookmark from "../assets/bookmark.png"
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import coin from "../assets/coin.png"
import work from "../assets/work.png"
import talent from "../assets/talent.png"
import connect from "../assets/connect.png"
import msg from "../assets/msg.png"
import notif from "../assets/notif.png"
import profile from "../assets/profile.png"
import market from "../assets/market.png"
import card from "../assets/card.png"
import wallpaper from "../assets/wallpaper.png"
import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Main_Page() {
  const navigate = useNavigate()
  const handleLogout = async(e) => {
    navigate ("/logout")
  }
  return (
    <div> 
      <div className='nav-mp'>
        <img src = {logo} className='logo-mp'></img>
        <div className='searchbar-mp'>
         <img src ={search} className='search-mp'></img>
         <input type="text" placeholder="Search..." className='i-1-mp'></input>
        </div>
        <div className='find_work-mp'>
          <img src = {work} className='work-mp'></img> <div className='p1-mp'>Find Work</div>
        </div>
        <div className='find_talent-mp'>
          <img src ={talent} className='talent-mp'></img><div className='p1-mp'>Find Talent</div>
        </div>
        <div className='connect-mp'>
          <img src ={connect} className='con-mp'></img> <div className='p1-mp'>Connections</div>
        </div>
        <div className='message-mp'>
          <img src ={msg} className='msg-mp'></img> <div className='p3-mp'>Messages</div>
        </div>
        <div className='notification-mp'>
          <img src ={notif} className='notif-mp'></img> <div className='p2-mp'>Notifications</div>
        </div>
        <div className='profile-mp'>
          <img src ={profile} className='prof-mp'></img> <div className='p4-mp'>Me</div>
        </div>
        <div className='logout-mp'>
          <button className='logout-mp-button' onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className='main-mp'>
      <div className='left-mp'>
      <div className='box-1-mp'>
      <img src = {wallpaper} className='wp-mp'></img>
      <img src = {profile} className='pfp-mp'></img>
      <div className='title-mp'>
      <div className='bp-1-mp'>Shreya Bhoir</div>
      <div className='bp-2-mp'>Python Enthusiast | Frontend Dev</div>
      </div>
      <div className='box1-part2-mp'>
        <div className='bp-3-mp'>82<img src ={coin} className='coin-mp'></img></div>
        <div className='bp-3-mp'>Proposals</div>
        <div className='bp-3-mp'>Projects</div>
        <div className='bp-3-mp'>References</div>
      </div>
      <div className='box1-part3-mp'>
        <img src ={bookmark}className='bookmark-mp'></img>Saved Items
      </div>
      </div>
      <div className='box-2-mp'>
      <img src ={market} className='market-mp'></img>
      <div className='b-2-mp'>
        <div className='box2-p1-mp'>Market Trends</div>
        <div className='box2-p2-mp'>What's going on?</div>
      </div>
      </div>
      <div className='box-3-mp'>
        <img src = {card} className='card-mp'></img>
        <div className='b-3-mp'>
          <div className='box3-p1-mp'>Get Verified!</div>
          <div className='box3-p2-mp'>Link your pancard</div>
        </div>
      </div>
      </div>
      <div className='right-mp'>
        <div className='r-box-1-mp'>
          <img src = {profile} className='profile1-mp'></img>
          <div className='post-mp'>
          <input className='i-2-mp' type='text' placeholder="What's on your mind?"></input>
          <div className='t-1-mp'><FaUpload style={{  marginRight: '1rem' }}/>Media</div>
          </div>
        </div>
        <div className='section-seperator-mp'>
          <hr className='hr-1-mp'></hr>
          <div className='history-mp'>
          <div className='curr-mp'><u>Best Matches</u></div>
          |
          <div className='past-mp'> Most Recent</div>
          </div>
        </div>
        <div className='r-box-2-mp'>
          <div className='rb-top-mp'>
            <img src ={profile} className='rb-pfp-mp'></img>
            <div className='rb-title-mp'><div className='rb-name-mp'>Dhru Burte</div>
            <div className='rb-def-mp'>Python Enthusiast | Frontend Developer</div></div>
            <div className='flw-mp'> + Follow</div>
            <div className='heart-mp'><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        stroke="red"          
        strokeWidth="1"    
        width="20px"
        height="20px"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg></div>
          </div>
          <div className='rb-mid-mp'>
            <div className='rb-m-tit-mp'>Create a HTML Emailer for the design provided</div>
            <div className='rb-m-des-mp'>Hourly: $5-$10 - Entry Level - Est. Time: Less than 1 month</div>
            <div className='rb-m-body-mp'>Need a frontend developer that can easily create this website that we need. 
            The project should commence within a week.<br/>  Please do not extend time limit. I have attached a file for reference.</div>
          </div>
          <div className='rb-mid-icon-mp'>
            <div className='icon-1-mp'>HTML</div>
            <div className='icon-1-mp'>CSS</div>
            <div className='icon-1-mp'>Javascript</div>
          </div>
          <div className='rb-mid-end-mp'>
            <div className='rb-m-t-mp'>
            <div className='rb-m-t1-mp'>Payment Verified</div>
            <div className='rb-m-t1-mp'>30k+ spent</div>
            <div className='rb-m-t1-mp'>MH,India</div>
          </div>
          <div className='rb-m-e-mp'>
            Proposals : 10 - 15
            </div>
          </div>
          <div className='rb-end-i-mp'>
          <div className='rb-end-icon1-mp'><FaThumbsUp style={{ fontSize: '25px', marginRight: '1rem' }}/>LIKE</div>
          <div className='rb-end-icon1-mp'><FaComment style={{ fontSize: '25px', marginRight: '1rem' }}/>COMMENT</div>
          <div className='rb-end-icon1-mp'><FaShare style={{ fontSize: '25px', marginRight: '1rem' }}/>SHARE</div>
          </div>
        </div>
        <div className='r-box-3-mp'>
          <div className='rb-top-mp'>
            <img src ={profile} className='rb-pfp-mp'></img>
            <div className='rb-title-mp'><div className='rb-name-mp'>Sahil Khan</div>
            <div className='rb-def-mp'>Python Enthusiast | Frontend Developer</div></div>
            <div className='flw-mp'> + Follow</div>
            <div className='heart-mp'><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        stroke="red"          
        strokeWidth="1"    
        width="20px"
        height="20px"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg></div>
          </div>
          <div className='rb-mid-mp'>
            <div className='rb-m-tit-mp'>Create a HTML Emailer for the design provided</div>
            <div className='rb-m-des-mp'>Hourly: $5-$10 - Entry Level - Est. Time: Less than 1 month</div>
            <div className='rb-m-body-mp'>Need a frontend developer that can easily create this website that we need. 
            The project should commence within a week. <br/>Please do not extend time limit. I have attached a file for reference.</div>
          </div>
          <div className='rb-mid-icon-mp'>
            <div className='icon-1-mp'>HTML</div>
            <div className='icon-1-mp'>CSS</div>
            <div className='icon-1-mp'>Javascript</div>
          </div>
          <div className='rb-mid-end-mp'>
            <div className='rb-m-t-mp'>
            <div className='rb-m-t1-mp'>Payment Verified</div>
            <div className='rb-m-t1-mp'>30k+ spent</div>
            <div className='rb-m-t1-mp'>MH,India</div>
          </div>
          <div className='rb-m-e-mp'>
            Proposals : 10 - 15
            </div>
          </div>
          <div className='rb-end-i-mp'>
          <div className='rb-end-icon1-mp'><FaThumbsUp style={{ fontSize: '25px', marginRight: '1rem' }}/>LIKE</div>
          <div className='rb-end-icon1-mp'><FaComment style={{ fontSize: '25px', marginRight: '1rem' }}/>COMMENT</div>
          <div className='rb-end-icon1-mp'><FaShare style={{ fontSize: '25px', marginRight: '1rem' }}/>SHARE</div>
          </div>
        </div> 
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

