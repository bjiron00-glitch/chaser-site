import React, { useState } from 'react';
import './App.css';
import logo from './chaserlogofixedtrans.svg';
function App() {
  
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

return (
    <div className="chaser-container">
      <header>
        <img src={logo} alt="CHASER brand logo - stylized black and white typography" className="main-logo" />
        <p><i>Garage, Hardgroove, and 140</i></p>
      </header>

      {/* REACT ACCORDION SECTION */}
      <div className="accordion-section">
        <h3>THE GOOD STUFF</h3>
        
        
        <div className="accordion-item">
          <button className="accordion-header" onClick={() => toggle('mixes')}>
            🎧 Recent Mixes <span>{openId === 'mixes' ? '−' : '+'}</span>
          </button>
          {openId === 'mixes' && (
            <div className="accordion-content">
              <a href="https://soundcloud.com/cellekta/cr8digs003?si=e7fe6d291ba0492e984c81d7db9a494c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">CR8DIGS003 W/ CHASER (a Cell Ekta Mix)</a>
              <a href="https://soundcloud.com/cellekta/cell-ekta-b2b-chaser-atrium?si=a0b1b849588b4c25950a4eb97034b5af&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">Cell Ekta b2b CHASER | Atrium Discovered Sessions</a>
            </div>
          )}
        </div>

        
        <div className="accordion-item">
          <button className="accordion-header" onClick={() => toggle('upcoming-shows')}>
            🔥 Upcoming Shows <span>{openId === 'upcoming-shows' ? '−' : '+'}</span>
          </button>
          {openId === 'upcoming-shows' && (
            <div className="accordion-content">
              <a href="" target="_blank">May 9 | Atrium Music Lounge Warehouse Opening (Free with RSVP)  Fort Collins, CO</a>
            </div>
          )}
        </div>


        <div className="accordion-item">
          <button className="accordion-header" onClick={() => toggle('creators')}>
            👐 Support a Local Creator <span>{openId === 'creators' ? '−' : '+'}</span>
          </button>
          {openId === 'creators' && (
            <div className="accordion-content">
            <div className="creator-grid">
        
          {/* ACCORDION CREATOR IMAGES */}
          <a href="https://bio.site/incubatordenver?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnoD1vKttBbNopxPmcR-iGQvmfb1UG-DUp0h6ZElFaF5Hp891He2qsosiw3Bc_aem_ukfGJE-g5uu8R4JFt8KvNQ" target="_blank" rel="noreferrer">
            <img src="/Incubator.png" alt="The Incubator" className="creator-logo" />
          </a>

          <a href="https://linktr.ee/HouseOnTap?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnX-VQz_0Qb5n0lL6WxHFmmexvyPUJC1CFPUmdnj7GB-p1655SYqbKg304yVY_aem_RmKdR20WrTEpILKVoTmEVA" target="_blank" rel="noreferrer">
            <img src="/houseontap.png" alt="House on Tap" className="creator-logo" />
          </a>

          <a href="https://www.instagram.com/hidden.doors.experience/" target="_blank" rel="noreferrer">
            <img src="/hiddendoors.png" alt="Hidden Doors" className="creator-logo" />
          </a>

          <a href="https://www.instagram.com/basement.rave.mg/" target="_blank" rel="noreferrer">
            <img src="/brmg.png" alt="Basement Rave Music Group" className="creator-logo" />
          </a>
          </div>
          </div>
          )}
        </div> 
        
        
       <div className="accordion-item">
        <button className="accordion-header" onClick={() => toggle('tracks')}>
        🎛️ What I'm Listening To <span>{openId === 'tracks' ? '−' : '+'}</span>
        </button>
        {openId === 'tracks' && (
      <div className="accordion-content">
        <iframe 
        width="100%" 
        height="300" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2295512798&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
      <div 
        style={{
        fontSize: '10px', 
        color: '#cccccc',
        lineBreak: 'anywhere',
        wordBreak: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis', 
        fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
        fontWeight: 100
        }}>
        <a 
          href="https://soundcloud.com/itsmsft" 
          title="msft." 
          target="_blank" 
          rel="noreferrer" 
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
        msft.
        </a> · 
        <a 
          href="https://soundcloud.com/itsmsft/reset-main-phase-remix-feat" 
          title="Reset (Main Phase Remix) [feat. Killa P]" 
          target="_blank" 
          rel="noreferrer" 
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
        Reset (Main Phase Remix) [feat. Killa P]
        </a>
      </div>
      </div>
      )}
      </div>



      </div>



      {/* YOUTUBE SECTION */}
      <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tWSo-GSA61s" 
          title="CHASER - 4x4 at the Atrium - Live Set" frameBorder="0" allowFullScreen>
        </iframe>
      </div>

      {/* DID YOU KNOW TABLE */}
      <h2>Did You Know?</h2>
      <table className='diduknow'>
        <tbody>
          <tr>
            <td className="table-label">Origin</td>
            <td>Born in Chicago's underground in the late 1970's, what we know as house music was the first direct descendant of Disco. A venue named "The WareHouse" gained notoriety as the place to be for hearing this new type of music, so much so that local record stores would advertise records with "as played at the WareHouse", with the term "House" becoming the slang term to describe those tracks.</td>
          </tr>
          <tr>
            <td className="table-label">Equipment Evolution</td>
            <td>What originated as analog, vinyl DJing has evolved into a completely digital ecosystem. Although purely vinyl DJs can still be found, the industry standard equipment we see at venues today is not only 100% digital, but even allows you to cut out your laptop and plug a flash drive of music straight into the DJ equipment, using their built in screens to see all of the important song information like BPM, key, and duration.</td>
          </tr>
        </tbody>
      </table>
      {/* BOTTOM LINKS */}
      <div className="social-icons">
        
        <a href="https://on.soundcloud.com/po03738uTBT0y0ekvp" target="_blank" rel="noreferrer" id="soundcloud_link" className="social-icon">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="60" fill="currentColor">
        <title>SoundCloud</title>
        <path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/>
        </svg>
        </a>

        
        <a href="https://www.instagram.com/askforchaser/" target="_blank" rel="noreferrer" id="instagram_link" className="social-icon">
        <svg viewBox="0 0 448 512" width="42" fill="currentColor">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
