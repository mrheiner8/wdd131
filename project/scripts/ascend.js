// 1. Select the elements
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const today = new Date();
const currentYear = today.getFullYear();

// 2. Add the click event listener
menuButton.addEventListener('click', () => {
    // 3. Toggle the 'show' class on and off
    navigation.classList.toggle('show');
    // 4.Optional: Change the button symbol from ≡ to X when open
    menuButton.textContent = navigation.classList.contains('show') ? 'X' : '≡';
});
// 5.Inject the footer dates into the HTML spans
document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;