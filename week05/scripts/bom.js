// ==========================================
// 1. DOM ELEMENT SELECTION & INITIALIZATION
// ==========================================

// Grab the HTML elements we need to interact with
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Pull the saved list from the browser's memory (localStorage)
// JSON.parse converts the saved text string back into a real JavaScript array
// The || [] provides a blank array as a fallback if it's the user's first time visiting
let chaptersArray = JSON.parse(window.localStorage.getItem('bomList')) || [];

// As soon as the page loads, loop through the saved array. 
// For each item in the array, run the displayList callback function to draw it on the screen.
chaptersArray.forEach(displayList);

// ==========================================
// 2. CORE FUNCTIONS
// ==========================================

// Function to handle the visual creation of a new list item
function displayList(item) {
    // Create empty HTML elements in the browser's memory
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Fill those elements with the text passed into the function (item) and the 'X' icon
    li.textContent = item;
    deleteButton.textContent = '❌';

    // Accessibility: Tell screen readers what this button does
    deleteButton.setAttribute('aria-label', 'Remove chapter');

    // Assemble the DOM: Put the button inside the <li>, and the <li> inside the <ul>
    li.append(deleteButton);
    list.append(li);

    // Clear the input box so it's empty for the next entry
    input.value = '';

    // ADD A DELETE EVENT LISTENER FOR THIS SPECIFIC ITEM
    deleteButton.addEventListener('click', function () {
        // Step 1: Remove the item visually from the HTML list
        list.removeChild(li);

        // Step 2: Remove the item from our background array
        // .filter() creates a new array keeping only chapters that do NOT match the deleted item
        chaptersArray = chaptersArray.filter(chapter => chapter !== item);

        // Step 3: Save this newly updated array to localStorage
        setChapterList();
    });
}

// Function to handle saving data to the browser
function setChapterList() {
    // localStorage can only hold strings, not arrays. 
    // JSON.stringify converts our JavaScript array into a readable text string before saving it to the 'bomList' key.
    localStorage.setItem('bomList', JSON.stringify(chaptersArray));
}

// ==========================================
// 3. MAIN EVENT LISTENERS
// ==========================================

// Listen for a click on the main "Add Chapter" button
button.addEventListener('click', function () {

    // Ensure the input isn't blank (trim removes accidental spaces)
    if (input.value.trim() !== '') {

        // Step 1: Add the user's new text to the end of our background array
        chaptersArray.push(input.value);

        // Step 2: Call our function to visually draw the new item on the screen
        displayList(input.value);

        // Step 3: Call our function to save the updated array to localStorage
        setChapterList();
    }

    // Force the cursor back into the input box automatically, whether they added an item or just clicked empty
    input.focus();
});