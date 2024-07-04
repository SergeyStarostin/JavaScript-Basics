const ACCESS_KEY = "kupMDaJcwHX5343wSpR0d9ZdIebHNY3GUd7Xn2UJZCU";
const photoLikesElement = document.getElementById("photoLikes");
const likeButton = document.getElementById("likeButton");
const prevButton = document.getElementById("prevButton");
let liked = false;
let likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];

async function getRandomImage() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    );
    const data = await response.json();
    const imageUrl = data.urls.regular;
    const photographerName = data.user.name;
    const photographerUsername = data.user.username;

    document.getElementById("image").src = imageUrl;
    document.getElementById(
      "photographer"
    ).textContent = `Photographer: ${photographerName} (@${photographerUsername})`;

    liked = likedImages.includes(imageUrl);
    updateLikeButton();

    history.unshift({ imageUrl, photographerName });
    localStorage.setItem("history", JSON.stringify(history));
  } catch (error) {
    console.error("Error fetching random image:", error);
  }
}

function updateLikeButton() {
  likeButton.textContent = liked ? "dislike" : "like";
}

likeButton.addEventListener("click", () => {
  liked = !liked;
  updateLikeButton();
  if (liked) {
    photoLikesElement.textContent = parseInt(photoLikesElement.textContent) + 1;
    likedImages.push(document.getElementById("image").src);
  } else {
    photoLikesElement.textContent = parseInt(photoLikesElement.textContent) - 1;
    likedImages = likedImages.filter(
      (image) => image !== document.getElementById("image").src
    );
  }
  localStorage.setItem("likedImages", JSON.stringify(likedImages));
});

prevButton.addEventListener("click", () => {
  if (history.length > 1) {
    history.shift();
    const prevImage = history[0];
    document.getElementById("image").src = prevImage.imageUrl;
    document.getElementById(
      "photographer"
    ).textContent = `Photographer: ${prevImage.photographerName}`;
  } else {
    alert("No previous images");
  }
});

window.onload = getRandomImage;
