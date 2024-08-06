document.addEventListener("DOMContentLoaded", function () {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || {};
  const productList = document.getElementById("productList");
  const reviewsContainer = document.getElementById("reviews");

  for (let productName in reviews) {
    const productItem = document.createElement("li");
    productItem.textContent = productName;
    productItem.addEventListener("click", function () {
      displayReviews(productName);
    });
    productList.appendChild(productItem);
  }

  function displayReviews(productName) {
    reviewsContainer.style.display = "block";
    reviewsContainer.innerHTML = "";
    const productReviews = reviews[productName];
    if (productReviews && productReviews.length > 0) {
      productReviews.forEach((review, index) => {
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");
        reviewItem.innerHTML = `
                  <p>${review}</p>
                  <span class="delete-btn" data-product="${productName}" data-index="${index}">Удалить</span>
              `;
        reviewsContainer.appendChild(reviewItem);
      });
    } else {
      reviewsContainer.innerHTML = "<p>Нет отзывов для этого продукта</p>";
    }
  }

  reviewsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const productName = event.target.getAttribute("data-product");
      const index = parseInt(event.target.getAttribute("data-index"));
      reviews[productName].splice(index, 1);
      localStorage.setItem("reviews", JSON.stringify(reviews));
      displayReviews(productName);
    }
  });
});
