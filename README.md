# Ally Cards - Vue.js Application

This project is a simple web application called **Ally Cards**, built with Vue.js and Vite. It displays a deck of cards designed to help people step up and be better allies in meetings. Each card describes a common exclusionary scenario and provides actionable advice.

## Features

- Displays a grid of cards.
- Each card shows a scenario on the front.
- Clicking a card flips it to reveal advice on the back.
- Built with Vue.js (JavaScript version) and Vite.
- Card data is stored in a JSON file.

## Project Structure

The Vue.js application code is located in the `ally-cards` directory:

- `ally-cards/public`: Static assets that are directly copied to the build output.
- `ally-cards/src`: Main application source code.
  - `ally-cards/src/assets`: Static assets like JSON data (`cards.json`) and images (if any).
  - `ally-cards/src/components`: Vue components (`Card.vue`, `CardGrid.vue`).
  - `ally-cards/src/App.vue`: The main application Vue component.
  - `ally-cards/src/main.js`: The entry point of the Vue application.
- `ally-cards/vite.config.js`: Vite configuration file.
- `ally-cards/package.json`: Project dependencies and scripts.

## Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm) - Version 16.x or higher recommended.

## Setup and Running

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd ally-cards
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`. Open this URL in your web browser to see the application.

## Building for Production (Optional)

If you want to create a production build:

1.  **Navigate to the project folder:**
    ```bash
    cd ally-cards
    ```

2.  **Run the build command:**
    ```bash
    npm run build
    ```
    This will generate optimized static assets in the `ally-cards/dist` directory.

---

This project was developed with the assistance of an AI coding partner.
