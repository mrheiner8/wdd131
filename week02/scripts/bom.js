// 1. Select the necessary HTML elements from the DOM and store them in variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Add a click event listener to the "Add Chapter" button
button.addEventListener('click', function () {

    // 3. Validate the input: ensure it is not empty after trimming invisible spaces
    if (input.value.trim() !== '') {

        // 4. Create a new list item (li) and a delete button in the browser's memory
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // 5. Populate the new elements with the user's input and the 'X' icon
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // 6. Add an ARIA label to the button so screen readers know what the 'X' means
        deleteButton.setAttribute('aria-label', 'Remove chapter');

        // 7. Assemble the pieces: put the button inside the li, and the li inside the ul
        li.append(deleteButton);
        list.append(li);

        // 8. Clean up the interface by clearing the text from the input field
        input.value = '';

        // 9. Add a nested event listener to the specific delete button we just created
        deleteButton.addEventListener('click', function () {
            // When clicked, remove this specific list item from the main list
            list.removeChild(li);
        });
    }

    // 10. Regardless of what happened above, force the active cursor back into the input box
    // so the user can immediately type their next chapter or fix a blank entry
    input.focus();
});