<template>
  <div class="card" :class="{ 'is-flipped': isFlipped }" @click="flipCard">
    <div class="card-face card-front">
      <p>{{ cardData.scenario }}</p>
    </div>
    <div class="card-face card-back">
      <p>{{ cardData.advice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFlipped: false
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    }
  }
};
</script>

<style scoped>
.card {
  width: 220px; /* Slightly wider */
  height: 320px; /* Slightly taller */
  perspective: 1000px;
  cursor: pointer;
  position: relative;
  border: none; /* Remove border, use shadow for depth */
  border-radius: 12px; /* More rounded corners */
  box-shadow: 0 4px 8px rgba(0,0,0,0.15); /* Softer, more pronounced shadow */
  background-color: #fff; /* Explicit background for front */
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1); /* Smoother transition */
  display: flex;
  flex-direction: column; /* Align content vertically */
  justify-content: center;
  align-items: center;
  padding: 20px; /* Increased padding */
  box-sizing: border-box;
  text-align: center;
  overflow-y: auto;
  border-radius: 12px; /* Match card's border-radius */
}

.card-front {
  /* background-color: #f8f9fa; /* Lighter front */
  color: #343a40;
}

.card-back {
  background-color: #e9ecef; /* Slightly darker back */
  color: #212529;
  transform: rotateY(180deg);
}

.card-face p {
  font-size: 0.95em;
  margin: 0; /* Remove default p margin if any */
}

.card.is-flipped .card-front {
  transform: rotateY(-180deg);
}

.card.is-flipped .card-back {
  transform: rotateY(0deg);
}
</style>
