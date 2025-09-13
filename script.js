let scaleFactor = 2; 

function calculateArea(length, width) { 
  let area = length * width; 
  return area * scaleFactor;  
}

console.log(calculateArea(5, 4)); 

function animateBox(boxId) {
  const box = document.getElementById(boxId);
  box.classList.toggle("animate");
}

document.getElementById("animateBtn").addEventListener("click", function() {
  animateBox("box");
});

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("show");
});
