const newImage = document.createElement('img');
newImage.src = "https://placekitten.com/408/287";
newImage.alt = "encore des chats";

const newCat = document.querySelector('.second-card');
newCat.appendChild(newImage);