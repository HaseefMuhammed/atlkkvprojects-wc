const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture-btn');
const retakeBtn = document.getElementById('retake-btn');
const capturedImage = document.getElementById('captured-image');
const cameraSection = document.getElementById('camera-section');
const posterSection = document.getElementById('poster-section');

// Access the webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("Error accessing webcam: ", err);
  });

// Capture photo
captureBtn.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert to data URL and display in the poster
  const imageDataUrl = canvas.toDataURL('image/png');
  capturedImage.src = imageDataUrl;

  // Add animations and switch sections
  cameraSection.classList.add('fade');
  setTimeout(() => {
    cameraSection.style.display = 'none';
    posterSection.style.display = 'block';
  }, 500);
});

// Retake photo
retakeBtn.addEventListener('click', () => {
  posterSection.style.display = 'none';
  cameraSection.classList.remove('fade');
  cameraSection.style.display = 'flex';
});