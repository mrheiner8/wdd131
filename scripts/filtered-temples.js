// Select the HTML elements
const today = new Date();
const currentYear = today.getFullYear();
const hamburgerElement = document.querySelector('#menu');
const navElement = document.querySelector('.navigation');
const homeLink = document.querySelector('#home');
const oldLink = document.querySelector('#old');
const newLink = document.querySelector('#new');
const largeLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');

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
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Denver Colorado",
        location: "Centennial, Colorado, United States",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-42455.jpg"
    },
    {
        templeName: "Pocatello Idaho",
        location: "Pocatello, Idaho, United States",
        dedicated: "2021, November, 7",
        area: 71125,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/pocatello-idaho-temple/pocatello-idaho-temple-23276-thumb.jpg"
    },
    {
        templeName: "Idaho Falls Idaho",
        location: "Idaho Falls, Idaho, United States",
        dedicated: "1945, September, 23",
        area: 85624,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-1911-thumb.jpg"
    },
];

oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => temple.dedicated.substring(0, 4) <= 1900)
    displayTemples(oldTemples);
});

newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => temple.dedicated.substring(0, 4) >= 2000)
    displayTemples(newTemples);
});
largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area >= 90000)
    displayTemples(largeTemples);
});
smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area <= 10000)
    displayTemples(smallTemples);
});
homeLink.addEventListener("click", () => {
    const homeTemples = temples
    displayTemples(homeTemples);
});

function displayTemples(filteredTemples) {
    const mainElement = document.querySelector("#card-container");
    mainElement.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("figure");
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedication: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
            `;
        mainElement.appendChild(card);
    });
}

displayTemples(temples);