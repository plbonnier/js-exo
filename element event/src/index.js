// We create a variable set to the title with the cursor position
const titleCursorPosition = document.querySelector("#title-cursor-position");

// We listen to mouse movement on the body
document.body.addEventListener("mousemove", function (event) {
  // Everytime the mouse moves, we change the text in the element
  titleCursorPosition.innerHTML = `x:${event.clientX}, y:${event.clientY}`;
});
