const course = document.querySelector('#course');
const button = document.querySelector('#update-btn');

button.addEventListener('click', () => {
  course.textContent = 'AI Engineer';
});