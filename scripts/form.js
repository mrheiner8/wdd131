// Get current date data for the footer
const today = new Date();
const currentYear = today.getFullYear();

// An array of objects holding the product data
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Target the HTML select element by its ID
const productSelect = document.getElementById("product-name");

// Loop through each item in the products array
products.forEach(product => {
    // 1. Create a blank <option> tag
    let newOption = document.createElement("option");

    // 2. Set the backend value of the option to the product ID
    newOption.value = product.id;

    // 3. Set the visible text of the option to the product name
    newOption.textContent = product.name;

    // 4. Attach the finished option to the select dropdown in the HTML
    productSelect.appendChild(newOption);
});

// Inject the footer dates into the HTML spans
document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;