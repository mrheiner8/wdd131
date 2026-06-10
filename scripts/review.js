// Footer date logic
const today = new Date();
const currentYear = today.getFullYear();

// Target the span where the review total will be displayed
const counterDisplay = document.getElementById("review-counter");

// Retrieve the current count from the browser's localStorage. 
// If it doesn't exist yet, it returns null, so the OR (||) operator sets it to 0 instead.
// Number() ensures the string retrieved from storage is converted into a mathematical integer.
let numReviews = Number(window.localStorage.getItem("reviews-count")) || 0;

// Add 1 to the count to register this current form submission
numReviews++;

// Save the newly updated count back to the browser's localStorage
window.localStorage.setItem("reviews-count", numReviews);

// Update the visible text on the page with the final number
counterDisplay.textContent = numReviews;

// Inject the footer dates into the HTML
document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;