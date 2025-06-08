<template>
  <div id="app">
    <header>
      <h1>Ally Cards</h1>
      <p>A deck of cards for helping people step up in meetings.</p>
    </header>
    <main>
      <CardGrid />
    </main>
    <footer>
      <p>Click on a card to see advice.</p>
    </footer>
  </div>
</template>

<script>
import CardGrid from './components/CardGrid.vue';

export default {
  name: 'App',
  components: {
    CardGrid
  }
};
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background-color: #f4f7f6; /* Slightly off-white */
  color: #333;
  line-height: 1.6;
}

#app {
  max-width: 1200px;
  margin: 20px auto; /* Added top/bottom margin */
  padding: 20px;
  text-align: center;
}

header {
  margin-bottom: 40px; /* Increased spacing */
}

header h1 {
  font-size: 2.8em;
  color: #2c3e50;
  margin-bottom: 10px; /* Spacing below h1 */
}

header p {
  font-size: 1.1em;
  color: #5a7881; /* Softer color for subtitle */
  max-width: 600px;
  margin: 0 auto; /* Center the paragraph if it's narrower */
}

main {
  margin-top: 20px;
  margin-bottom: 20px;
}

footer {
  margin-top: 40px; /* Increased spacing */
  padding-top: 20px; /* Add some space above footer text */
  border-top: 1px solid #e0e0e0; /* Separator line */
  font-size: 0.9em;
  color: #6c757d; /* Bootstrap muted color */
}
</style>
