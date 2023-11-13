// We create a variable thirdBox set to a new div element
const thirdBox = document.createElement("div");

// We add a "box" class to the element 
thirdBox.classList.add("box");

// We create a variable containerBox set to the DOM node with the class "container-boxes"
const containerBox = document.querySelector(".container-boxes");

// We add the thirdBox inside containerBox 
containerBox.appendChild(thirdBox);