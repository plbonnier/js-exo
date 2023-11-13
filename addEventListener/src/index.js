const dog = document.querySelector('.img-dogs');
const title = document.querySelector('.title');
dog.addEventListener('click', function(){
dog.src = "https://placedog.net/300/200";
dog.alt= "encore un chien";
});

title.addEventListener('mouseover', function() {
  title.style.color = "red";
});

title.addEventListener('mouseleave',  function() {
  title.style.color = "black";
});