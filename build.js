import fs from 'fs';
import yaml from 'js-yaml';

try {
    const yamlText = fs.readFileSync('ally-cards/assets/cards.yaml', 'utf8');
    const cards = yaml.load(yamlText);
    fs.writeFileSync('ally-cards/assets/cards.json', JSON.stringify(cards, null, 2));
    console.log('Successfully converted cards.yaml to cards.json');
} catch (e) {
    console.error('Error during build process:', e);
}
