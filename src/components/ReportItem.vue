<template>
  <li class="report__item">
    <div class="texthighlight_yellow t-align-left"><h3>{{ title }}</h3></div>
    <a :href="link" class="link-download" download>Скачать отчет</a>
  </li>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }

}
</script>

<style scoped>

  .report__item {
    padding: 1.5rem 0.5rem;
    border: 2px dashed var(--color-dark);
    text-align: center;
    margin-bottom: 0;
  }

  .report__item .texthighlight_yellow {
    text-align: center;
    margin-bottom: calc(var(--space) * 0.5);
  }
  .report__item .texthighlight_yellow h3 {
    margin-bottom: 0;
  }

  .report__item a {
    font-weight: 500;
    text-decoration: none;
  }

</style>