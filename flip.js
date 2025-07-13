document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
        card.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                card.classList.toggle('is-flipped');
            }
        });
    });
});
