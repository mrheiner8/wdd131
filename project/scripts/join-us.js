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

// 3. Populate the dropdown dynamically
instruments.forEach(inst => {
    let option = document.createElement("option");
    option.value = inst.id;
    option.textContent = inst.name;
    instrumentSelect.appendChild(option);
});