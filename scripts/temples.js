// Select the HTML elements
const today = new Date();
const currentYear = today.getFullYear();
const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('.navigation');

document.getElementById("currentYear").innerHTML = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified;

// Add a click event listener
hamburgerElement.addEventListener('click', () => {
    // This toggles the 'show' class on and off the nav list
    navElement.classList.toggle('show');

    // This checks if the menu is open, and changes the symbol accordingly
    if (navElement.classList.contains('show')) {
        hamburgerElement.textContent = '▽';
    } else {
        hamburgerElement.textContent = '≡';
    }
});
