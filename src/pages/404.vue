<template>

  <LayoutRU v-if="lang === 'RU'">
    <section class="page-404 section page-404-ru">
      <div class="w-text page-400__wrapper">
        <div class="w-text page-400__text">
          <h1>Страница не найдена</h1>
          <p>По такому адресу страница не найдена, попробуйте воспользоваться меню выше, чтобы найти нужную информацию или уточните адрес страницы.</p>
        </div>
        <div class="page-404__img-wrapper">
          <g-image class="page-404__img" alt="img" aria-hidden="true" src="@/assets/images/404-page-img.png"/>
        </div>
      </div>
    </section>
  </LayoutRU>

  <LayoutEN v-else>
    <section class="page-404 section page-404-en">
      <div class="w-text page-400__wrapper">
        <div class="w-text page-400__text">
          <h1>Page not found</h1>
          <p>The page was not found at this URL, try using the navigation above to find the information you need or check for correctness of the page address.</p>
        </div>
        <div class="page-404__img-wrapper">
          <g-image class="page-404__img" alt="img" aria-hidden="true" src="@/assets/images/404-page-img.png"/>
        </div>
      </div>
    </section>
  </LayoutEN>

</template>

<script>
export default {

  data() {
    return {
      lang: 'EN'
    }
  },



  created() {
    if(this.$route.path.includes('ru')) {
      this.lang = 'RU'
    } 
  }

}
</script>

<style scoped>

  .page-404 {
    padding-top: calc(var(--space) * 4);
    padding-bottom: 0;
    /* min-height:  calc(100vh - 172px); */
    overflow: hidden;
  }

  .page-404 .page-400__wrapper  {
    max-width: 1160px;
    min-height: 928px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
  }

  .page-400__wrapper p {
    font-weight: 500;
  }

  .page-400__text {
    padding: 0;
  }

  .page-404__img-wrapper {
    position: relative;
    height: 760px;
  }

  .page-404__img {
    position: absolute;
    bottom: 92px;
    left: calc(50% - 588px);
    width: 1160px;
    max-width: 1160px;
    z-index: 0;
  }

  @media screen and (max-width: 920px) {
    .page-404-ru .page-404__img {
      bottom: 123px;
    }
  }

  @media screen and (max-width: 510px) {
    .page-404-ru .page-404__img {
      bottom: 150px;
    }
  }

  @media screen and (max-width: 380px) {
    .page-404-en .page-404__img {
      bottom: 119px;
    }
  }

</style>