const fs = require('fs');
const yaml = require('js-yaml');

try {
    // Read the template files
    const templateHtml = fs.readFileSync('index.html', 'utf8');
    const cardTemplateHtml = `
        <div class="card" tabindex="0">
            <div class="card-inner">
                <div class="card-face card-front">
                    <p>{{scenario}}</p>
                </div>
                <div class="card-face card-back">
                    <p>{{advice}}</p>
                </div>
            </div>
        </div>
    `;

    // Load the card data
    const yamlText = fs.readFileSync('assets/cards.yaml', 'utf8');
    const cards = yaml.load(yamlText);

    // Generate the card HTML
    const cardsHtml = cards.map(card => {
        return cardTemplateHtml
            .replace('{{scenario}}', card.scenario)
            .replace('{{advice}}', card.advice);
    }).join('');

    // Inject the cards into the main template
    const outputHtml = templateHtml.replace('<!-- Cards will be dynamically inserted here by JavaScript -->', cardsHtml)
                                     .replace('<script src="script.js" defer></script>', '');


    // Create the output directory if it doesn't exist
    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }

    // Write the final HTML file
    fs.writeFileSync('dist/index.html', outputHtml);

    // Copy the CSS file
    fs.copyFileSync('style.css', 'dist/style.css');

    console.log('Successfully built static site to dist/');

} catch (e) {
    console.error('Error during build process:', e);
}
