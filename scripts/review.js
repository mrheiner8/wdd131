// Select the HTML elements
const today = new Date();
const currentYear = today.getFullYear();
const counterDisplay = document.getElementById("review-counter");
let numReviews = Number(window.localStorage.getItem("reviews-count")) || 0;
numReviews++;
window.localStorage.setItem("reviews-count", numReviews)
counterDisplay.textContent = numReviews;


document.getElementById("currentYear").innerHTML = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified;