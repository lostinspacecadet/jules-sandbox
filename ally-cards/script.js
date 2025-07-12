document.addEventListener('DOMContentLoaded', () => {
    loadAndRenderCards();
});

function loadAndRenderCards() {
    const cardGridContainer = document.getElementById('card-grid-container');
    if (!cardGridContainer) {
        console.error('Card grid container not found!');
        return;
    }

    fetch('assets/cards.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} while fetching cards.json`);
            }
            return response.json();
        })
        .then(cards => {
            if (cards && Array.isArray(cards)) {
                renderCards(cards);
            } else {
                console.error('Failed to parse JSON or an empty/invalid structure was returned.');
                cardGridContainer.innerHTML = '<p>Error loading card data. The JSON file might be empty or malformed.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching or processing cards.json:', error);
            cardGridContainer.innerHTML = `<p>Could not load cards: ${error.message}. Please check the network connection and file path.</p>`;
        });
}

function renderCards(cards) {
    const cardGridContainer = document.getElementById('card-grid-container');
    if (!cardGridContainer) return;

    cardGridContainer.innerHTML = ''; // Clear any loading messages

    cards.forEach(cardData => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        // cardElement.tabIndex = 0; // For accessibility, allowing focus

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-face', 'card-front');
        const scenarioP = document.createElement('p');
        scenarioP.textContent = cardData.scenario;
        cardFront.appendChild(scenarioP);

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-face', 'card-back');
        const adviceP = document.createElement('p');
        adviceP.textContent = cardData.advice;
        cardBack.appendChild(adviceP);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);

        cardElement.addEventListener('click', () => {
            cardElement.classList.toggle('is-flipped');
        });

        // Add keyboard accessibility for flipping
        cardElement.addEventListener('keypress', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                cardElement.classList.toggle('is-flipped');
            }
        });


        cardGridContainer.appendChild(cardElement);
    });
}
