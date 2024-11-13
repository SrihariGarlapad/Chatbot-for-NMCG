import {gsap} from 'gsap';
document.addEventListener("DOMContentLoaded", function () {


var slogans = [
  "Save Ganga, Save Life.",
  "Keep Ganga Flowing, Keep India Glowing.",
  "Protect Ganga, Our Lifeline.",
  "Clean Ganga, Green Ganga.",
  "Ganga's Purity, Our Responsibility.",
  "A Clean Ganga, A Healthy Nation.",
  "Ganga: A Sacred Trust to Protect.",
  "Ganga's Blue, Our Responsibility Too.",
  "Respect the Ganges, Preserve Its Purity.",
  "Ganga, the Elixir of Life.",
  "Ganga: India's Soul, India's Responsibility.",
  "Breathe Clean, Keep Ganga Clean.",
  "River Ganga, Our Precious Jewel.",
  "Ganga, the Heart of India.",
  "Ganga's Beauty Lies in Its Purity.",
  "Protect Ganga, Ensure Our Future.",
  "Nurture Ganga, Sustain Life.",
  "Every Drop Counts, Protect Ganga.",
  "Clean Ganga, Green Future.",
  "Save Ganga, Save the Environment.",
  "Ganga: A River Worth Saving.",
  "Ganga's Smile, Our Responsibility.",
  "Clean Ganga, Healthy Nation.",
  "Ganga, the Lifeline of Millions.",
  "Let's Make Ganga Pollution-Free.",
  "Protect Ganga, Preserve Heritage.",
  "Clean Ganga, Pristine Ganga.",
  "Ganga: Where Life Begins.",
  "Ganga: A River with a Purpose.",
  "Ganga: Our Duty to Preserve.",
  "Ganga: A Blessing for All.",
  "Clean Ganga, Happy Families.",
  "Ganga's Flow, Our Responsibility.",
  "Protect Ganga, Ensure Prosperity.",
  "Clean Ganga, Healthy Generations.",
  "Ganga, Our Past and Our Future.",
  "Ganga: The River of Healing.",
  "Ganga, A Source of Life.",
  "Respect Ganga, Protect Ganga.",
  "Ganga, the Mother of All Rivers.",
  "Protect Ganga, Preserve Ecosystem.",
  "Clean Ganga, Bright Tomorrow.",
  "Ganga's Purity, Our Legacy.",
  "Ganga's Glory, Our Responsibility.",
  "Ganga, Our Source of Inspiration.",
  "Respect Ganga, Cherish Ganga.",
  "Clean Ganga, Pure Ganga.",
  "Ganga: A Symbol of Purity.",
  "Ganga's Beauty, Our Commitment.",
  "Ganga, the Essence of India.",
  "Protect Ganga, Preserve Dharma.",
  "Clean Ganga, Prosperous Ganga.",
  "Ganga, Our Natural Treasure.",
  "Ganga's Sanctity, Our Responsibility.",
  "Respect Ganga, Revive Ganga.",
  "Clean Ganga, Vibrant India.",
  "Ganga: A Cultural Heritage.",
  "Ganga, A Legacy to Protect.",
  "Ganga's Grace, Our Responsibility.",
  "Protect Ganga, Protect Wildlife.",
  "Clean Ganga, Clean India.",
  "Ganga, the River of Rejuvenation.",
  "Ganga: A Promise to Fulfill.",
  "Ganga's Abundance, Our Responsibility.",
  "Respect Ganga, Preserve Ganga.",
  "Clean Ganga, Strong India.",
  "Ganga, the Nectar of Life.",
  "Ganga, A Sacred Commitment.",
  "Ganga's Beauty, Our Duty.",
  "Protect Ganga, Protect Future Generations.",
  "Clean Ganga, Thriving Communities.",
  "Ganga, A Precious Legacy.",
  "Ganga's Legacy, Our Responsibility.",
  "Respect Ganga, Preserve Nature.",
  "Ganga, A Heritage to Preserve.",
  "Ganga's Flow, Our Lifeline.",
  "Protect Ganga, Protect Our Roots.",
  "Clean Ganga, Green India.",
  "Ganga, Our Commitment to Nature.",
  "Ganga: Our Duty to Preserve.",
  "Ganga, the River of Unity.",
  "Ganga's Grace, Our Heritage.",
  "Respect Ganga, Protect Our Legacy.",
  "Clean Ganga, Healthy Ecosystem.",
  "Ganga, the River of Renewal.",
  "Ganga, Our Sacred Obligation.",
  "Ganga's Serenity, Our Responsibility.",
  "Ganga, A Promise for Tomorrow.",
  "Protect Ganga, Ensure Harmony."
  ];
  function getRandomSlogan() {
    var randomIndex = Math.floor(Math.random() * slogans.length);
    var randomSlogan = slogans[randomIndex];
    return randomSlogan;
  }
  
  function displayRandomSlogan() {
    var sloganContainer = document.getElementById("slogan");
    if(sloganContainer){
        sloganContainer.textContent = getRandomSlogan();
    }
  }

  // Call the function when the page is loaded and on refresh
  window.addEventListener("load", displayRandomSlogan);
   

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




const oneSection = document.querySelector('.one');

gsap.from(oneSection, {
  opacity: 0,
  y: '50px',
  duration: 1,
  ease: 'power3.out',
});

// ... previous code ...

function displayRandomSlogann() {
  var sloganContainer = document.getElementById("slogan");
  var firstLoad = true;

  function changeSlogan() {
    if (sloganContainer) {
      gsap.to(sloganContainer, {
        opacity: 0,
        duration: 1,
        onComplete: function () {
          sloganContainer.textContent = getRandomSlogan();
          gsap.to(sloganContainer, {
            opacity: 1,
            duration: 1
          });
        }
      });
    }
  }

  // Initial slogan display
  if (firstLoad) {
    firstLoad = false;
    if (sloganContainer) {
      sloganContainer.textContent = getRandomSlogan();
    }
  }

  // Change slogan every 2 seconds
  setInterval(changeSlogan, 3000);
}

// Call the function when the page is loaded
window.addEventListener("load", displayRandomSlogann);

});