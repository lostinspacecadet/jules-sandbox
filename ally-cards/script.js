document.addEventListener('DOMContentLoaded', () => {
    const cardGridContainer = document.getElementById('card-grid-container');

    if (!cardGridContainer) {
        console.error('Card grid container not found!');
        return;
    }

    // Ensure jsyaml is loaded
    if (typeof jsyaml === 'undefined') {
        console.error('js-yaml library not loaded. Make sure it is included in index.html before this script.');
        // As a fallback, try to load it dynamically - though this is not ideal for production
        // and has timing issues. The primary method should be the script tag in HTML.
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js';
        scriptTag.onload = loadAndRenderCards; // Try again once loaded
        document.head.appendChild(scriptTag);
        return;
    }

    loadAndRenderCards();
});

function loadAndRenderCards() {
    const cardGridContainer = document.getElementById('card-grid-container');
    if (!cardGridContainer) return; // Should have been checked already

    fetch('assets/cards.yaml')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} while fetching cards.yaml`);
            }
            return response.text();
        })
        .then(yamlText => {
            try {
                const cards = jsyaml.load(yamlText);
                if (cards && Array.isArray(cards)) {
                    renderCards(cards);
                } else {
                    console.error('Failed to parse YAML or an empty/invalid structure was returned.');
                    cardGridContainer.innerHTML = '<p>Error loading card data. The YAML file might be empty or malformed.</p>';
                }
            } catch (e) {
                console.error('Error parsing YAML:', e);
                cardGridContainer.innerHTML = `<p>Error parsing card data: ${e.message}. Please check the console and the YAML file format.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching or processing cards.yaml:', error);
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
