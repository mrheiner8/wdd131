// 1. Create an array of objects for your instruments
const instruments = [
    { id: "violin", name: "Violin" },
    { id: "viola", name: "Viola" },
    { id: "cello", name: "Cello" },
    { id: "doubleBass", name: "Double Bass" },
    { id: "flute", name: "Flute" },
    { id: "oboe", name: "Oboe" },
    { id: "clarinet", name: "Clarinet" },
    { id: "bassClarinet", name: "Bass Clarinet" },
    { id: "bassoon", name: "Bassoon" },
    { id: "frenchHorn", name: "French Horn" },
    { id: "trumpet", name: "Trumpet" },
    { id: "trombone", name: "Trombone" },
    { id: "baritone", name: "Baritone" },
    { id: "tuba", name: "Tuba" },
    { id: "percussion", name: "Percussion" },
    { id: "harp", name: "Harp" },
    { id: "piano", name: "Piano" },
];
// 2. Select the dropdown element from join-us.html
const instrumentSelect = document.getElementById("instrument");
// 3. Target your fieldsets
const choirFieldset = document.getElementById("choir-fieldset");
const orchestraFieldset = document.getElementById("orchestra-fieldset");
// 4. Select all radio buttons with the name "ensemble"
const ensembleRadios = document.querySelectorAll('input[name="ensemble"]');
// 5. Populate the dropdown dynamically
instruments.forEach(inst => {
    let option = document.createElement("option");
    option.value = inst.id;
    option.textContent = inst.name;
    instrumentSelect.appendChild(option);
});
// 6. Set up an event listener for each radio button
ensembleRadios.forEach(radio => {
    radio.addEventListener("change", (event) => {
        // Look at event.target.value to see if "choir" or "orchestra" was clicked
        if (event.target.value === "choir") {
            // Hint: Use .classList.remove("hidden") and .classList.add("hidden") here!
            choirFieldset.classList.remove("hidden");
            orchestraFieldset.classList.add("hidden");
        } else if (event.target.value === "orchestra") {
            orchestraFieldset.classList.remove("hidden");
            choirFieldset.classList.add("hidden");
        }
    });
});

// Hint: Use .classList.remove("hidden") and .classList.add("hidden") here!