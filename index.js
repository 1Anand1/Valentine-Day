// === PERSONALIZE NAME HERE ===
document.getElementById("name").innerText = "Pradnya";

// Valentine data
const valentineDays = {
  7: { img: "images/rose.jpg", msg: "A rose for the most beautiful woman 🌹" },
  8: { img: "images/chocolate.jpg", msg: "Life is sweeter with you 🍫" },
  9: { img: "images/teddy.jpg", msg: "You’re my forever teddy 🧸" },
  10: { img: "images/promise.jpg", msg: "I promise to always choose you 🤞" },
  11: { img: "images/hug.jpg", msg: "Sending you the warmest hug 🤗" },
  12: { img: "images/kiss.jpg", msg: "A kiss sealed with love 💋" },
  14: { img: "images/valentine.jpg", msg: "You are my Valentine ❤️" },
};

const today = new Date();
const date = today.getDate();
const month = today.getMonth(); // Feb = 1

if (month === 1 && valentineDays[date]) {
  document.body.style.backgroundImage = `url(${valentineDays[date].img})`;
  document.getElementById("dayMessage").innerText = valentineDays[date].msg;
} else {
  document.body.style.backgroundImage = "url(images/valentine.jpg)";
  document.getElementById("dayMessage").innerText =
    "Every day with you is special ❤️";
}

// YES popup
document.getElementById("yesBtn").onclick = () => {
  document.getElementById("popup").classList.remove("hidden");
};

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 800);

// Music toggle
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

toggle.onclick = () => {
  if (music.paused) {
    music.play();
    toggle.innerText = "🔊";
  } else {
    music.pause();
    toggle.innerText = "🔇";
  }
};
