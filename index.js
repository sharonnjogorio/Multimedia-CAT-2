const video  = document.getElementById('wildlifeVideo');
const btn    = document.getElementById('toggleBtn');
const status = document.getElementById('status');

btn.addEventListener('click', () => {
  if (video.hidden) {
    video.hidden = false;
    video.play();
    btn.textContent = '⛔ Hide video';
    status.textContent = 'Video is now playing.';
  } else if (video.paused) {
    video.play();
    btn.textContent = '⛔ Hide video';
    status.textContent = 'Video is now playing.';
  } else {
    video.pause();
    video.hidden = true;
    btn.textContent = '▶ Play video';
    status.textContent = 'Video is hidden.';
  }
});

video.addEventListener('play',  () => { btn.textContent = '⛔ Hide video'; });
video.addEventListener('pause', () => {
  if (!video.hidden) btn.textContent = '▶ Play video';
});
video.addEventListener('ended', () => {
  btn.textContent = '▶ Play video';
  status.textContent = 'Video finished.';
});
