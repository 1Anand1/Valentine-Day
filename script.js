console.log("JS loaded ✅");

// Personalize name
document.getElementById("name").innerText = "Pradnya";

// Valentine background & messages
const valentineDays = {
  7: { img: "images/rose.jpg", msg: "A rose for you 🌹" },
  8: { img: "images/chocolate.jpg", msg: "Life is sweeter with you 🍫" },
  9: { img: "images/teddy.jpg", msg: "You’re my teddy 🧸" },
  10: { img: "images/promise.jpg", msg: "I promise you always ❤️" },
  11: { img: "images/hug.jpg", msg: "A warm hug for you 🤗" },
  12: { img: "images/kiss.jpg", msg: "A kiss with love 💋" },
  14: { img: "images/valentine.jpg", msg: "Happy Valentine’s Day ❤️" },
};

const today = new Date();
const day = today.getDate();
const month = today.getMonth(); // Feb = 1

// Background logic
if (month === 1 && valentineDays[day]) {
  document.body.style.backgroundImage = `url(${valentineDays[day].img})`;
  document.getElementById("dayMessage").innerText = valentineDays[day].msg;
} else {
  // Always fallback
  document.body.style.backgroundImage = "url(images/valentine.jpg)";
}

// YES button works 100%
document.getElementById("yesBtn").addEventListener("click", () => {
  console.log("YES clicked ❤️");
  document.getElementById("popup").classList.remove("hidden");
});
