/* prevent submit button from refreshing the page */
const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
});
/* ========================================================================== */
