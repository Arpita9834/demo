
const notes = document.querySelectorAll('.sticky-note');
const button = document.getElementById('tearNote');
let currentIndex = 0;

button.addEventListener('click', () => {
  notes[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % notes.length;
  notes[currentIndex].classList.add('active');
});
