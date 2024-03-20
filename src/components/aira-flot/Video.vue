<template>
  <div class="aira-flot-video__wrapper aira-flot-grid-2">
    <div class="aira-flot-video__container">
      <iframe height="360" src="https://dzen.ru/embed/vVvgJzWxa1QU?from_block=r3XFcMwblwQ&from=zen&mute=0&autoplay=0&tv=0" allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media" frameborder="0" scrolling="no" allowfullscreen></iframe>
      <span>Россия24: репортаж об испытаниях водного дрона на реках Волгоградской области</span>
    </div>
    <div class="aira-flot__video__text">
      <h2 class="aira-flot__title desktop">
        <span class="aira-flot__title-accent">Опыт применения</span>
      </h2>
      <h2 class="aira-flot__title mobile">
        Опыт <span class="aira-flot__title-accent">применения</span>
      </h2>
      <p> <b>Испытания проводились по техническому заданию заказчиков</b> в разных погодных условиях, включая температуру воздуха до -10°С  и небольшой лед на водоеме, с применением различного контрольно-измерительного оборудования и оснащения.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .aira-flot-video__wrapper {
    /* grid-template-columns: 2fr 1fr; */
    gap: calc(var(--space) * 2);
    padding: calc(var(--space) * 2);
    border-radius: 28px;
    background-color: var(--color-light)
  }
  .aira-flot-video__container {
    display: flex;
    flex-direction: column;
    gap: calc(var(--space) * 0.5);
  }

  .aira-flot-video__container iframe {
    border-radius: 28px;
  }

  .aira-flot-video__container span {
    font-weight: 400;
    font-size: calc(var(--text-size-base) * 0.6);
    font-style: italic;
    max-width: 60%;
  }

  .aira-flot__video__text .aira-flot__title {
    margin-bottom: calc(var(--space) * 0.5);
  }

  @media screen and (max-width: 480px) {
    .aira-flot-video__container iframe {
      width: 100%;
    }

    .aira-flot-video__container span {
      max-width: 100%;
    }
  
  }

</style>