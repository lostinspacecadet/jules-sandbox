# Ally Cards - HTML, CSS, and Pure JavaScript Version
This project is a simple web application called **Ally Cards**, built with pure HTML, CSS, and JavaScript. It displays a deck of cards designed to help people step up and be better allies in meetings. Each card describes a common exclusionary scenario and provides actionable advice.
This version focuses on a lightweight implementation without a JavaScript framework, using Material Design 3 (M3) principles for its look and feel.
## Features
- Displays a grid of interactive allyship cards.
- Each card shows a scenario on the front.
- Clicking a card (or using Enter/Space when focused) flips it to reveal advice on the back, implemented with pure CSS animations.
- Styled according to Google's Material Design 3 (M3) guidelines using custom CSS.
- Card data is loaded dynamically from a human-readable YAML file (`cards.yaml`).
- No build process required for development or viewing.
## Technology Stack
-   **HTML5:** For content structure.
-   **CSS3:** For styling and animations, adhering to M3 principles.
-   **Pure JavaScript (ES6+):** For dynamic content loading, DOM manipulation, and interactions.
-   **js-yaml:** A JavaScript library to parse YAML data, loaded via CDN.
-   **YAML:** For storing the card data in a human-readable format.
## Project Structure
All application files are located within the \`ally-cards\` directory:
-   \`ally-cards/\`
    -   \`index.html\`: The main HTML file.
    -   \`style.css\`: Contains all CSS rules, including M3 styling and card animations.
    -   \`script.js\`: Handles fetching and parsing YAML data, and dynamically generating cards.
    -   \`assets/\`
        -   \`cards.yaml\`: The YAML file containing the scenarios and advice for each card.
    -   \`public/\`: Currently unused, but could hold static images or other assets if needed.
## Setup and Running
This project does not require any build steps or complex dependencies beyond a modern web browser.
**To run the application locally:**
1.  **Clone the repository (if you haven't already):**
    \`\`\`bash
    git clone <repository-url>
    cd <repository-directory>
    \`\`\`
2.  **Serving the files:**
    While you can try opening \`ally-cards/index.html\` directly in your browser (using a \`file:///\` URL), this may lead to issues with fetching the \`cards.yaml\` file due to browser security policies (CORS).
    For reliable local development, it's recommended to serve the files using a simple local HTTP server from the root of the repository or from the \`ally-cards\` directory. Here are a couple of easy ways:
    *   **Using Python (if installed):**
        Navigate to the \`ally-cards\` directory in your terminal and run:
        \`\`\`bash
        # If you have Python 3.x
        python -m http.server
        # If you have Python 2.x (less common now)
        # python -m SimpleHTTPServer
        \`\`\`
        Then open your browser to \`http://localhost:8000\` (or the port indicated).
    *   **Using VS Code's "Live Server" Extension:**
        If you use Visual Studio Code, you can install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Once installed, right-click on \`ally-cards/index.html\` in the VS Code explorer and choose "Open with Live Server".
    *   **Using Node.js \`serve\` (if Node.js/npm is available):**
        You can install \`serve\` globally:
        \`\`\`bash
        npm install -g serve
        \`\`\`
        Then, navigate to the \`ally-cards\` directory and run:
        \`\`\`bash
        serve .
        \`\`\`
        It will provide a local URL to open.
## Card Data - `assets/cards.yaml`
The content for the cards is stored in \`ally-cards/assets/cards.yaml\`. This file is designed to be human-readable and easy to edit.
-   Each card is an item in a YAML list, starting with a hyphen (\`-\`).
-   Each card has an \`id\`, \`scenario\`, and \`advice\`.
-   Long strings for scenarios and advice can be wrapped for readability using YAML's folded (\`>\`) or literal (\`|\`) block styles.
**Contributing to Card Data:**
When adding or editing cards, try to maintain the existing format. For a good editing experience in VS Code, consider installing:
-   **YAML by Red Hat:** For YAML validation and language support.
## Code Formatting with Prettier
### Using Prettier for Consistent Formatting
This project includes a `.prettierrc.yaml` file in the root directory. This file contains settings that the Prettier code formatter uses to ensure code (especially `cards.yaml`) is styled consistently. Using Prettier helps maintain readability and reduces formatting inconsistencies in contributions.
**To use Prettier in Visual Studio Code:**
1.  **Install the Extension:**
    *   Open Visual Studio Code.
    *   Go to the Extensions view (you can use the shortcut `Ctrl+Shift+X` or `Cmd+Shift+X`).
    *   Search for **"Prettier - Code formatter"** (by Esben Petersen) and click "Install".
2.  **How it Works:**
    *   Once installed, the Prettier extension automatically detects and uses the settings from the `.prettierrc.yaml` file in this project.
3.  **Formatting Files:**
    *   **Manual Formatting:** You can format the currently open file by right-clicking anywhere in the editor and selecting **"Format Document"**. If VS Code asks you to choose a default formatter for that file type, select "Prettier - Code formatter".
    *   **Format on Save (Recommended):** For automatic formatting every time you save a file:
        1.  Open VS Code Settings:
            *   On Windows/Linux: File > Preferences > Settings
            *   On macOS: Code > Preferences > Settings
            *   Or use the shortcut `Ctrl+,` (or `Cmd+,`).
        2.  Search for **"Format On Save"** in the settings search bar and ensure the checkbox is ticked.
        3.  To ensure Prettier is used for specific file types without being prompted, you can set it as the default formatter. Search for **"Default Formatter"** in settings. While you can set a global default, it's often better to configure it per language in your VS Code `settings.json` file. You can open this file by opening the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and typing "Preferences: Open User Settings (JSON)". Then, add or modify the following:
            ```json
            {
                // ...your other settings...
                "editor.formatOnSave": true,
                "[yaml]": {
                    "editor.defaultFormatter": "esbenp.prettier-vscode"
                },
                "[javascript]": { // Optional: for script.js
                    "editor.defaultFormatter": "esbenp.prettier-vscode"
                },
                "[css]": {    // Optional: for style.css
                    "editor.defaultFormatter": "esbenp.prettier-vscode"
                },
                "[html]": {   // Optional: for index.html
                    "editor.defaultFormatter": "esbenp.prettier-vscode"
                }
                // ...
            }
            ```
            This ensures that when you save a YAML, JavaScript, CSS, or HTML file, Prettier will automatically format it according to the rules in `.prettierrc.yaml` (for global settings like print width) and Prettier's own sensible defaults for those languages.
By following these steps, you can easily keep the project's codebase consistently formatted.
## Material Design (M3)
This application aims to follow Google's Material Design 3 principles for its visual styling and user experience. This is achieved through custom CSS rules that implement M3's color system, typography, shape, elevation, and spacing guidelines.
---
This project was developed with the assistance of an AI coding partner.
