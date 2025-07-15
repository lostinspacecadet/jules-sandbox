# Ally Cards

This project is a simple web application called **Ally Cards**, built with pure HTML, CSS, and JavaScript. It displays a deck of cards designed to help people step up and be better allies in meetings. Each card describes a common exclusionary scenario and provides actionable advice.

This version focuses on a lightweight implementation without a JavaScript framework, using [Material Design 3 (M3)][M3] principles for its look and feel.

## Features

- Displays a grid of interactive allyship cards
- Each card shows a scenario on the front
- Clicking a card (or using Enter/Space when focused) flips it to reveal advice on the back, implemented with pure CSS animations
- Styled according to Google's Material Design 3 (M3) guidelines using custom CSS
- Card data is stored in a human-readable YAML file (`cards.yaml`) and compiled into a static HTML file.

## Technology Stack

- **HTML5:** for content structure
- **CSS3:** for styling and animations, adhering to M3 principles
- **YAML:** for storing the card data in a human-readable format (`cards.yaml`)
- **Node.js:** for a build step to generate the static site.

## Project Structure
-   `index.html`: the template for the main HTML file
-   `style.css`: contains all CSS rules, including M3 styling and card animations
-   `assets/`
    -   `cards.yaml`: the YAML file containing the scenarios and advice for each card
-   `build.js`: the build script to convert `cards.yaml` into a static `index.html`
-   `dist/`: the output directory for the built site
    - `index.html`: the generated HTML file
    - `style.css`: the copied CSS file

## Development

The card content is managed in `assets/cards.yaml`. To update the cards displayed on the website, you must run the build script.

### Prerequisites

- Node.js and npm

### Build Step

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the build script:
   ```bash
   npm run build
   ```

This will generate the static site in the `dist/` directory.

## Setup and Running

This project requires a build step to generate the static site.

**To run the application locally:**
1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Install dependencies and run the build:**
    ```bash
    npm install
    npm run build
    ```
3.  **Serving the files:**
    For reliable local development, it's recommended to serve the files from the `dist/` directory. 
    ``` bash
    cd dist
    ```
    
    Here are a couple of easy ways:
    *   **Using Python (if installed):**
        Navigate to the `dist` directory in your terminal and run:
        ```bash
        # If you have Python 3.x
        python -m http.server
        ```
        Then open your browser to `http://localhost:8000` (or the port indicated).
    *   **Using VS Code's "Live Server" Extension:**
        If you use Visual Studio Code, you can install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Once installed, right-click on `dist/index.html` in the VS Code explorer and choose "Open with Live Server".
    *   **Using Node.js `serve` (if Node.js/npm is available):**
        You can install `serve` globally:
        ```bash
        npm install -g serve
        ```
        Then, navigate to the `dist` directory and run:
        ```bash
        serve .
        ```
        It will provide a local URL to open.

## Card Data - `assets/cards.yaml`

The content for the cards is stored in `assets/cards.yaml`. This file is designed to be human-readable and easy to edit.
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