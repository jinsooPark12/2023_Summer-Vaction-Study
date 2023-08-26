const images = ["img/0.jpeg", "img/1.jpeg", "img/2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

function bgSelect(){
    console.log([chosenImage]);
    document.body.style.backgroundImage = `url(${[chosenImage]})`;
  }
  bgSelect();