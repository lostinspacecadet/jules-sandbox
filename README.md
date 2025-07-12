# Ally Cards

This project is a simple web application called **Ally Cards**, built with pure HTML, CSS, and JavaScript. It displays a deck of cards designed to help people step up and be better allies in meetings. Each card describes a common exclusionary scenario and provides actionable advice.

This version focuses on a lightweight implementation without a JavaScript framework, using [Material Design 3 (M3)][M3] principles for its look and feel.

## Features

- Displays a grid of interactive allyship cards
- Each card shows a scenario on the front
- Clicking a card (or using Enter/Space when focused) flips it to reveal advice on the back, implemented with pure CSS animations
- Styled according to Google's Material Design 3 (M3) guidelines using custom CSS
- Card data is loaded dynamically from a human-readable YAML file (`cards.yaml`)
- No build process required for development or viewing

## Technology Stack

- **HTML5:** for content structure
- **CSS3:** for styling and animations, adhering to M3 principles
- **Pure JavaScript (ES6+):** for dynamic content loading, DOM manipulation, and interactions
- **js-yaml:** a JavaScript library to parse YAML data, loaded via CDN
- **YAML:** for storing the card data in a human-readable format

## Project Structure
All application files are located within the `ally-cards` directory:
-   `ally-cards/`
    -   `index.html`: the main HTML file
    -   `style.css`: contains all CSS rules, including M3 styling and card animations
    -   `script.js`: handles fetching and parsing YAML data, and dynamically generating cards
    -   `assets/`
        -   `cards.yaml`: the YAML file containing the scenarios and advice for each card
    -   `public/`: currently unused, but could hold static images or other assets if needed

## Setup and Running
This project does not require any build steps or complex dependencies beyond a modern web browser.

**To run the application locally:**
1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Serving the files:**
    While you can try opening `ally-cards/index.html` directly in your browser (using a `file:///` URL), this may lead to issues with fetching the `cards.yaml` file due to browser security policies (CORS).

    For reliable local development, it's recommended to serve the files using a simple local HTTP server from the root of the repository or from the `ally-cards` directory. Here are a couple of easy ways:
    *   **Using Python (if installed):**
        Navigate to the `ally-cards` directory in your terminal and run:
        ```bash
        # If you have Python 3.x
        python -m http.server
        # If you have Python 2.x (less common now)
        # python -m SimpleHTTPServer
        ```
        Then open your browser to `http://localhost:8000` (or the port indicated).
    *   **Using VS Code's "Live Server" Extension:**
        If you use Visual Studio Code, you can install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Once installed, right-click on `ally-cards/index.html` in the VS Code explorer and choose "Open with Live Server".
    *   **Using Node.js `serve` (if Node.js/npm is available):**
        You can install `serve` globally:
        ```bash
        npm install -g serve
        ```
        Then, navigate to the `ally-cards` directory and run:
        ```bash
        serve .
        ```
        It will provide a local URL to open.

## Card Data - `assets/cards.yaml`

The content for the cards is stored in `ally-cards/assets/cards.yaml`. This file is designed to be human-readable and easy to edit.
-   Each card is an item in a YAML list, starting with a hyphen (`-`).
-   Each card has an `id`, `scenario`, and `advice`.
-   Long strings for scenarios and advice can be wrapped for readability using YAML's folded (`>`) or literal (`|`) block styles.
  
**Contributing to Card Data:**

When adding or editing cards, try to maintain the existing format. For a good editing experience in VS Code, consider installing:

- **YAML by Red Hat:** for YAML validation and language support

## Material Design (M3)

This application aims to follow Google's [Material Design 3][M3] principles for its visual styling and user experience. This is achieved through custom CSS rules that implement [M3]'s color system, typography, shape, elevation, and spacing guidelines.

---

This project was developed with the assistance of an AI coding partner.

[links]: //
[M3]: https://m3.material.io/