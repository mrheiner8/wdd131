const orderBtn = document.getElementById("order-btn");
const ticketForm = document.getElementById("ticket-form");
const quantityInput= document.getElementById("quantity");
const totalPriceSpan = document.getElementById("total-price");


orderBtn.addEventListener("click", () => {
    ticketForm.classList.toggle("hidden");
});

function calculateTotal() {
    // 1. Find the currently selected radio button named "performance"
    const selectedPerformance = document.querySelector('input[name="performance"]:checked');
    // 2. Grab the value of the quantity input box
    const quantity = parseInt(quantityInput.value) || 0;

    // Check if a performance has been chosen yet
    if (selectedPerformance) {
        const price = parseInt(selectedPerformance.value);
        const total = price * quantity;

        // 3. Update the text content of your span using a template literal
        // Hint: Your rubric requires exclusive use of template literals for string output!
        totalPriceSpan.textContent = `${total}`;
    }
}

// Listen for changes to the ticket quantity field
quantityInput.addEventListener("input", calculateTotal);

// Listen for changes to the performance choice radio buttons
ticketForm.addEventListener("change", (event) => {
    if (event.target.name === "performance") {
        calculateTotal();
    }
});