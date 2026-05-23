// Select the HTML elements

// Get the current year
const today = new Date();
const currentYear = today.getFullYear();

// Output the year to the first span
document.getElementById("currentYear").textContent = currentYear;

// Output the last modified date to the second span
document.getElementById("lastModified").textContent = document.lastModified;