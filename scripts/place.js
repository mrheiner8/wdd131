// Select the HTML elements

// Get the current year
const today = new Date();
const currentYear = today.getFullYear();
// Get the temperature and wind speed
const temp = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
const windChillElement = document.getElementById("windChill");

// Output the year to the first span
document.getElementById("currentYear").textContent = currentYear;

// Output the last modified date to the second span
document.getElementById("lastModified").textContent = document.lastModified;

//Calculate wind chill
function calculateWindChill(t, w) {
    return (35.74 + (0.6215 * t) - (35.75 * Math.pow(w, 0.16)) + (0.4275 * t * Math.pow(w, 0.16))).toFixed(1);
}

// Insert wind chill 
if (temp <= 50 && windSpeed > 3) {
    windChillElement.textContent = calculateWindChill(temp, windSpeed) + " °F";
} else {
    windChillElement.textContent = "N/A";
}