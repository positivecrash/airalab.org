<template>
  <li class="aira-flot-monitoring__item">
    <span>0{{ index }}</span> 
    <p v-html="text"></p>
  </li>
</template>

<script>
export default {

  props: {
    index: {
      type: Number,
      default: null
    },
    text: {
      type: String,
      default: ''
    }
  }

}
</script>

<style scoped>

  .aira-flot-monitoring__item {
    padding: calc(var(--space) * 2) var(--space);
    display: flex;
    justify-content: center;
    gap: var(--space);
    font-size: var(--text-size-base);
    background-color: var(--color-light);
    border-radius: 28px;
  }

  .aira-flot-monitoring__item span {
    font-size: calc(var(--text-size-base) * 1.3);
    font-style: italic;
    font-weight: 500;
  }

</style>