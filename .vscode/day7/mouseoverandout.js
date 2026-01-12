// mouseoverandout.js
console.log("Script loaded");
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'orange';
  });
  box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'green';
  });
});