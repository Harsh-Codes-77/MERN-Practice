const title = document.getElementById('title');
const editButton = document.getElementById('editTitle');

editButton.onclick = function() {
    const newTitle = prompt("Enter a new title:");
    if (newTitle) {
        title.innerHTML = newTitle;
    }
}