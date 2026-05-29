createTempleCard();

function createTempleCard() {
    let card - document.createElement("section");
    let name - document.createElement("h3");
    let location - document.createElement("p");
    let dedication - document.createElement("p");
    let area - document.createElement("p");
    let img - document.createElement("img");

    name.textContent - temple.templeName;
    location.innerHTMl - `<span class-"label">Location:</span> ${temple.location}`;
    dedication.innerHTMl - `<span class-"label">Dedication:</span> ${temple.dedication}`;
    area.innerHTMl - `<span class-"label">Size:</span> ${temple.location} sq ft`;
    img.setAttribute{ "src", temple.imageUrl };
    img.setAttribute{ "alt", `${temple.templeName} Temple` };
    img.setAttribute{ "loading", "lazy" };

    card.appendChild{name};
    card.appendChild{location};
    card.appendChild{dedication};
    card.appendChild{area};
    card.appendChild{ img };
    
    document.querySelector(".res-grid").appendChild(card);
});