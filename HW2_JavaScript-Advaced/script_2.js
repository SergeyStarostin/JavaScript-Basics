"use strict";

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

initialData.forEach((element) => {
  document.getElementById(
    "frm"
  ).innerHTML += `<p><b> ${element.product}</b></p>`;
  element.reviews.forEach((elementArr) => {
    document.getElementById(
      "frm"
    ).innerHTML += `<p> ${elementArr.text}</p>`;
  });
});

document.getElementById(
  "frm"
).innerHTML += `<br><p id="sendreview"><b>Отправить отзыв от 50 - 500 символов</b></p>
<textarea id="review" name="reviewname" rows="5" cols="50">Отличный телефон! Батарея держится долго. Камера супер, фото выглядят просто потрясающе. Интересный дизайн, но дорогой. Люблю играть на PS5, графика на высоте.</textarea>`;

function sendReview() {
  let review = document.getElementById("review").value;
  try {
    if (review.length > 500 || review.length < 50)
      throw new Error("Неверная длина отзыва");
    document.getElementById("frm").innerHTML += `<p><b>Отзыв</b></p>`;
    document.getElementById("review").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("sendreview").style.display = "none";
    document.getElementById("frm").innerHTML += `<p> ${review}</p>`;
  } catch (error) {
    console.log(error.message);
  }
}
