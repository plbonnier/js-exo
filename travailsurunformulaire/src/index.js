const form = document.querySelector('#form');
const input = document.querySelector('#todoInput');
const ul = document.querySelector('#todolist');
const newLi = document.createElement('li');
form.onsubmit = function (event) {
  event.preventDefault();
  newLi.innerHTML = `${input.value}`;
  ul.appendChild(newLi);
  input.value ="";
};


