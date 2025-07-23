
document.querySelectorAll('.timer-btn').forEach(button => {
  button.addEventListener('click', () => {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.webkitRequestFullscreen) { 
      docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) { 
      docElm.msRequestFullscreen();
    }

    const timeInSeconds = parseInt(button.dataset.time);
    console.log(`Timer for ${timeInSeconds} seconds started`);
  });
});

let countdownInterval = null;

document.querySelectorAll('.timer-btn').forEach(button => {
  button.addEventListener('click', () => {
    const selectedTime = parseInt(button.dataset.time);
    const countdownEl = document.getElementById('countdown');

    // Go fullscreen
    const docElm = document.getElementById('study-room-wrapper');
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.webkitRequestFullscreen) {
      docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }

    document.querySelector('.timer-buttons').style.display = 'none';

    countdownEl.style.display = 'block';
    startCountdown(selectedTime, countdownEl);
  });
});

function startCountdown(duration, display) {
  let timer = duration;

  function updateTimer() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(countdownInterval);
      display.textContent = "GoodJOB!! We're Proud Of You";
    }
  }

  updateTimer(); 
  countdownInterval = setInterval(updateTimer, 1000);
}

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    stopCountdown();
  }
});

function stopCountdown() {
  clearInterval(countdownInterval);
  document.getElementById('countdown').style.display = 'none';
  document.querySelector('.timer-buttons').style.display = 'flex';
}


document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 300, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 8, random: true },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false },
        onclick: { enable: false },
        resize: true
      }
    },
    retina_detect: true
  });
});
