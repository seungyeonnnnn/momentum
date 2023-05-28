const images = ["https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg", "https://wallpaper.dog/large/791275.jpg", "https://wallpaperaccess.com/full/193990.jpg"];

const body = document.body;

body.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);