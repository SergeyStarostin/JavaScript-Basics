document.getElementById('addReviewForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const review = document.getElementById('review').value;

    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[productName]) {
        reviews[productName] = [];
    }
    reviews[productName].push(review);

    localStorage.setItem('reviews', JSON.stringify(reviews));

    alert('Отзыв успешно добавлен!');
    window.location.href = 'reviews.html';
});