import React from "react";
import "./Styles/Home.css";
import {gsap} from 'gsap';
import './script';
import { Link } from "react-router-dom";
import home from './Gifs/home.gif';
import { useEffect } from "react";


function Home() {
  
  
  useEffect(() => {
      // Select the #Image element
const image = document.getElementById('Image');

// Set initial properties (you can adjust these as per your requirements)
gsap.set(image, { opacity: 0, y: "-100px" });

// Create the animation timeline
const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

// Add animations to the timeline
tl.to(image, { opacity: 1, y: 0, duration: 3 });

// Trigger the animation when the page is fully loaded
window.addEventListener('load', () => {
  tl.play(); // Play the animation timeline
});




// const oneSection = document.querySelector('.one');

// gsap.from(oneSection, {
//   opacity: 1,
//   y: '0',
//   duration: 1,
//   ease: 'power3.out',
// });
  }, []); // Empty dependency array ensures the effect runs once after initial render


  return (
    <>
      <div id="main">
      <div className="one">
      <img id="Image" src={home} alt="" />
            <p id="slogan">
            Respect Ganga, Protect Our Legacy.
            </p>
            <Link id="cb" target='_blank' to="http://localhost:3000/Chatbot?#">Chatbot</Link>      
    </div> 
    {/* <div className="two">
        <img id="Namami" src="https://nmcg.nic.in/images/nmcgNew.jpg" alt=""/>
      </div> */}
    </div>

    </>
  );
}

export default Home;
