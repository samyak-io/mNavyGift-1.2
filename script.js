// Get the DOM elements (place this at the top of the JavaScript code)
const congratsAudio = document.getElementById('congratsAudio');
const imageContainer = document.getElementById('imageContainer');
const startJourneyBtn = document.querySelector('.start-journey-btn');
const countdownTimer = document.getElementById('countdownTimer');
const playButton = document.querySelector('.play-button');
const memoriesBtn = document.querySelector('.memories-btn');
const memoriesContainer = document.getElementById('memoriesContainer');

// Rest of the JavaScript code remains the same...

// Set the congratulatory audio source
congratsAudio.src = 'congrats.mp3';

// Background image slideshow
const backgroundPhotos = document.querySelectorAll('.background-photo');
let currentPhotoIndex = 0;

function changeBackground() {
  backgroundPhotos.forEach((photo, index) => {
    if (index === currentPhotoIndex) {
      photo.style.opacity = 1;
    } else {
      photo.style.opacity = 0;
    }
  });
  currentPhotoIndex = (currentPhotoIndex + 1) % backgroundPhotos.length;
}

setInterval(changeBackground, 5000); // Change image every 5 seconds

// ... (existing code)

// Calculate the time remaining until joining date
const joiningDate = new Date('2023-08-21'); // Replace with your friend's joining date

function updateCountdown() {
  const now = new Date();
  const timeDiff = joiningDate - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  countdownTimer.textContent = `Time Remaining Until Joining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Call the updateCountdown function initially to show the time remaining immediately
updateCountdown();

// Update countdown every 1 second
setInterval(updateCountdown, 1000);

// Play/Pause audio function
let isAudioPlaying = true;
function toggleAudio() {
  if (isAudioPlaying) {
    congratsAudio.pause();
  } else {
    congratsAudio.play();
  }
  isAudioPlaying = !isAudioPlaying;
}

// Open memories page function
function openMemoriesPage() {
  window.location.href = 'memories.html';
}

// Add click event listener to memories button to open memories.html page
memoriesBtn.addEventListener('click', openMemoriesPage);

// Function to open the selfie.html page with the camera
function openCamera() {
  window.location.href = 'selfie.html';
}

// Update the Start Journey button event listener to open the camera
startJourneyBtn.addEventListener('click', openCamera);
