<template>
  <div class="card-grid">
    <Card v-for="card in cards" :key="card.id" :cardData="card" />
  </div>
</template>

<script>
import Card from './Card.vue';
import cardsData from '@/assets/cards.json'; // Using @ as an alias for /src

export default {
  name: 'CardGrid',
  components: {
    Card
  },
  data() {
    return {
      cards: cardsData
    };
  }
};
</script>

<style scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 25px; /* Slightly increased gap */
  justify-content: center;
  padding: 20px 0; /* Padding on top/bottom, not sides if #app handles that */
}
</style>
