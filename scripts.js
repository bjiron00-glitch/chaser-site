console.log("Hello World!");

window.alert("Testing 1, 2, 3");


//Image Carousel
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel_slide');

function showSlide(index) {
    // 1. Reset: Hide all slides by removing 'active'
    slides.forEach(slide => slide.classList.remove('active'));
    
    // 2. Wrap around logic
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    
    slides[currentIndex].classList.add('active');
}


document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.getElementById('prevBtn').addEventListener('click', () => {
showSlide(currentIndex - 1);
    });

showSlide(currentIndex);

let autoSlideInterval;

function startAutoSlide() {
    // 5000ms = 5 seconds
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start the timer when the page loads
startAutoSlide();

// --- Pause on Hover ---
// This stops the timer when the mouse is over the carousel
const carouselContainer = document.querySelector('.carousel_container');

carouselContainer.addEventListener('mouseenter', stopAutoSlide);
carouselContainer.addEventListener('mouseleave', startAutoSlide);

//Soundcloud and instagram popups go here




//inactivity popup

window.onload = function() {
    
    
    const popupTimer = setTimeout(function() {
        document.getElementById('popup-overlay').style.display = 'flex';
    }, 10000);

    
    document.getElementById('close-popup').onclick = function() {
        document.getElementById('popup-overlay').style.display = 'none';
    };
};


//link table

import React, { useState } from 'react';
import './App.css';

const DJ_DATA = [
  {
    id: 'mixes',
    title: '🎧 Recent Mixes',
    links: [
      { label: 'Cell Ekta b2b Chaser | Atrium Discovered Sessions', url: 'https://soundcloud.com/cellekta/cell-ekta-b2b-chaser-atrium?si=87e89320403243b3ad327f1aca5e7bdf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { label: 'CR8DIGS003 w/ Chaser', url: 'https://soundcloud.com/cellekta/cr8digs003?si=e1c5a54581574a61a390f6ac340f90ef&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
      { label: 'CHASER 4x4 at The Atrium (Live Set)', url: 'https://www.youtube.com/watch?v=tWSo-GSA61s' },
    ]
  },
  {
    id: 'shows',
    title: '📅 Upcoming Shows',
    links: [
      { label: 'Mar 28 - HARDGROOVE: x2 Stage Rave @Sound Bar - Fort Collins, CO', url: 'https://dice.fm/event/7dq9n6-hardgroove-x2-stage-rave-28th-mar-sound-bar-fort-collins-tickets?pid=ecdc8e5d&_branch_match_id=831323955483205239&utm_medium=partners_api&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1fcxS05KNTFKNDS2NLAvyEyxTU1OSbZINU1RqytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAZKfvI0gAAAA%3D' },
    ]
  },
];

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    // If the section is already open, close it; otherwise, open the new one
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="container">
      <header className="profile-header">
        <div className="avatar">🎧</div>
        <h1>CHASER</h1>
        <p></p>
      </header>

      <div className="links-wrapper">
        {DJ_DATA.map((section) => (
          <div key={section.id} className="accordion-item">
            <button 
              className={`main-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
              <span className="arrow">{activeSection === section.id ? '−' : '+'}</span>
            </button>
            
            <div className={`sub-links ${activeSection === section.id ? 'show' : ''}`}>
              {section.links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sub-link-item"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

//This is a Test Comment