const quote = `"Almost everything will work again if you unplug it for a few minutes… including you." – Anne Lamott`;
const textElement = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
  if (index < quote.length) {
    textElement.innerHTML += quote.charAt(index);
    index++;
    setTimeout(typeWriter, 60); 
  }
}

window.onload = typeWriter;

 function startMeditation() {
    alert("Take a deep breath. Your meditation session has started. 🧘‍♂️");
  }

let timerInterval;

  function startMeditation() {
    const startButton = document.getElementById("start-btn");
    const timerDisplay = document.getElementById("timer-display");
    const container = document.documentElement;

    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }

    startButton.style.display = "none";

    let remaining = 5 * 60;

    function updateTimer() {
      const minutes = Math.floor(remaining / 60);
      const seconds = remaining % 60;
      timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

      if (remaining <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "Meditation complete! 🧘‍♂️";
        exitFullscreenSafely();
      }

      remaining--;
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
  }

  function exitFullscreenSafely() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById("timer-display").textContent = "";
      document.getElementById("start-btn").style.display = "inline-block";
    }
  });

function emojiToImageDataURL(emoji) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 32;
  canvas.height = 32;
  ctx.font = "28px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, 16, 16);
  return canvas.toDataURL();
}

document.addEventListener("DOMContentLoaded", function () {
  const emojiImages = ["❤️", "🌿", "✨"].map((emoji) => ({
    src: emojiToImageDataURL(emoji),
    width: 32,
    height: 32
  }));

  particlesJS("particles-js", {
    particles: {
      number: { value: 25, density: { enable: true, value_area: 800 } },
      shape: {
        type: "images",
        images: emojiImages
      },
      opacity: { value: 0.8 },
      size: { value: 16, random: true },
      move: {
        enable: true,
        speed: 1,
        out_mode: "out"
      },
      line_linked: { enable: false }
    },
    interactivity: {
      events: {
        onhover: { enable: false },
        onclick: { enable: false },
        resize: true
      }
    },
    retina_detect: true
  });
});

let breathStartTime = null;
let breathTimerInterval = null;

function startBreathChallenge() {
  breathStartTime = Date.now();
  document.getElementById("start-breath").style.display = "none";
  document.getElementById("stop-breath").style.display = "inline-block";
  document.getElementById("breath-result").textContent = "";

  breathTimerInterval = setInterval(() => {
    const now = Date.now();
    const elapsed = Math.floor((now - breathStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById("breath-timer").textContent =
      `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

function stopBreathChallenge() {
  clearInterval(breathTimerInterval);
  const elapsed = Math.floor((Date.now() - breathStartTime) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const result = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  document.getElementById("breath-timer").textContent = result;
  document.getElementById("start-breath").style.display = "inline-block";
  document.getElementById("stop-breath").style.display = "none";

  const recordInSeconds = 24 * 60 + 37;
  const diff = recordInSeconds - elapsed;

  document.getElementById("breath-result").textContent =
    diff <= 0
      ? "🎉 Incredible! You matched or beat the world record!"
      : `You were ${Math.floor(diff / 60)}m ${diff % 60}s away from the record. Try again!`;
}
