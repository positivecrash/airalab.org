<template>
  <div class="water-monitoring__item">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {

  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
  }

}
</script>

<style scoped>

  .water-monitoring__item {
    position: relative;
    padding-bottom: 66px;
  }

  .water-monitoring__item:not(:last-child) {
    margin-bottom: 17px;
  }

  .water-monitoring__item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 50px;
    background-color: var(--color-blue)
  }

  .water-monitoring__item h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: calc(var(--space) * 0.5);
  }

  .water-monitoring__item p {
    font-size: 1rem;
    text-align: center;
  }
</style>