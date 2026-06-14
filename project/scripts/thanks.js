// --- 1. URL PARAMETERS: GET FORM DATA ---
// This built-in JS feature grabs the data from the URL
const urlParams = new URLSearchParams(window.location.search);
const quantity = urlParams.get("quantity");
const performancePrice = urlParams.get("performance");
// --- PLURALIZE TICKET WORDS ---
const plural1 = document.getElementById("plural-1");
const plural2 = document.getElementById("plural-2");

// --- 2. LOCAL STORAGE: WELCOME BACK MESSAGE ---
let transactionCount = Number(localStorage.getItem("ascendTransactions")) || 0;
transactionCount++;
localStorage.setItem("ascendTransactions", transactionCount);

if (transactionCount >= 2) {
    const welcomeBackSpan = document.getElementById("welcomeBack-message");
    // Rubric requirement: Use template literal for output
    welcomeBackSpan.textContent = `Welcome back! `;
    welcomeBackSpan.classList.remove("hidden");
}


// --- 3. TRANSLATE PRICE TO NAME ---
let concertName = ``;
if (performancePrice === "10") {
    concertName = `the Fall or Spring Concert`; // Since both are $5
} else if (performancePrice === "15") {
    concertName = `The Lamb of God`;
} else if (performancePrice === "20") {
    concertName = `The Forgotten Carols`;
} else if (performancePrice === "5") {
                concertName = `the Spring Youth Concert`; 
} else {
        concertName = `our upcoming performance` ; {

        }
}

// --- 4. OUTPUT TO HTML ---
// --- 4. OUTPUT TO HTML ---
document.getElementById("quantity").textContent = `${quantity}`;
document.getElementById("concertName").textContent = `${concertName}`;

//--- 5. If the quantity is greater than 1, add the "s" to both spans ---
if (Number(quantity) > 1) {
    plural1.textContent = `s`;
    plural2.textContent = `s`;
}