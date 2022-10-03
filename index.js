const ratingItems = document.querySelectorAll(`.rating-item`);

const ratingCard = document.querySelector(`.rating-card`);
const btnSubmitRating = document.querySelector(`.btn-rating`);

const thankYouCard = document.querySelector(`.thank-you-card`);
const userRating = document.querySelector(`.user-rating`);


ratingItems.forEach(el => el.addEventListener(`click`, function() {
    ratingItems.forEach(el => el.classList.remove(`pressed`));
    el.classList.add(`pressed`);
}));


btnSubmitRating.addEventListener(`click`, function() {
    let rating = -1;
    ratingItems.forEach(el => el.classList.contains(`pressed`) ? rating = el.children[0].textContent : 0)
    if (rating === -1)
        return;
    ratingCard.classList.toggle(`hidden`);
    userRating.textContent = rating;
    thankYouCard.classList.toggle(`hidden`);
});

window.addEventListener(`keydown`, function(evt) {
    if (evt.key !== `Enter`)
        return;
    if (!evt.target.classList.contains(`rating-item`))
        return;
    ratingItems.forEach(el => el.classList.remove(`pressed`));
    evt.target.classList.add(`pressed`);
})