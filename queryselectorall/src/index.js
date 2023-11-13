const bearsPictures = [
    "https://placebear.com/500/279",
    "https://placebear.com/500/280",
    "https://placebear.com/500/300",
    "https://placebear.com/500/302",
    "https://placebear.com/500/305"
  ];
  const newPicture = document.querySelectorAll('img');
  for (let i=0; i<bearsPictures.length; i++) {
    newPicture[i].src = bearsPictures[i];
  }