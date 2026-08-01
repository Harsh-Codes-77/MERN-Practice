const form = document.getElementById("notes");
const input = document.getElementById("noteInput");
const list = document.getElementById("notesList");
const count = document.getElementById("noteCount");
const clearButton = document.getElementById("clearNotes");

let totalNotes = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (input.value.trim() === "") {
        alert("Please enter a note.");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create span for note text
    const span = document.createElement("span");
    span.innerText = input.value;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    // Delete note
    deleteButton.addEventListener("click", function () {
        li.remove();
        totalNotes--;
        count.innerText = totalNotes;
    });

    // Add span and button inside li
    li.append(span);
    li.append(deleteButton);

    // Add li to ul
    list.append(li);

    // Update counter
    totalNotes++;
    count.innerText = totalNotes;

    // Clear input
    input.value = "";
});

clearButton.addEventListener("click", function () {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
    totalNotes = 0;
    count.innerText = totalNotes;
});