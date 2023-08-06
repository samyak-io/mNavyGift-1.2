// Function to capture the selfie
function takePhoto() {
  const video = document.getElementById('cameraStream');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set the canvas dimensions to match the video dimensions
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Draw the video frame onto the canvas
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert the canvas content to a data URL representing the photo
  const photoURL = canvas.toDataURL('image/png');

  // Create a link element to download the photo
  const downloadLink = document.createElement('a');
  downloadLink.href = photoURL;
  downloadLink.download = 'selfie.png';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Show the prompt to share the photo with friends
  const message = 'Let your friends know with that selfie that you\'ve begun your journey!';
  alert(message);
}
