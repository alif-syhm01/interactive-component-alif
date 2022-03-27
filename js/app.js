const ratingsEl = document.querySelectorAll('.rating');
const buttonSubmit = document.querySelector('.submit');

ratingsEl.forEach(function (element) {
    element.addEventListener('click', function () {
        const selectedText = this.innerHTML;
        const filterElement = Array.from(ratingsEl).filter(function (value) {
            return value.innerHTML != selectedText ? value.classList.remove('active') : value.classList.add('active');
        });

        return filterElement
    });
});

buttonSubmit.addEventListener('click', function () {
    const getActiveRating = document.querySelector('.active').innerHTML;
    const cardElement = document.querySelector('.card')
    const newElement = `
        <div class="rated">
            <img src="images/illustration-thank-you.svg" alt="Illustration Thank You">
        </div>
        <div class="card-body rated">
            <span class="rated-selected">
                You selected ${getActiveRating} out of 5
            </span>
            <h1 class="body-header">Thank you!</h1>
            <p class="body-text">
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don't hesitate to get in touch!
            </p>
        </div>
    `;

    cardElement.innerHTML = newElement;
})