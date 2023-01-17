<template>

  <LayoutRU v-if="lang === 'RU' && !isRedirect">
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      metaTitle = "Страница не найдена"
      metaDescription = "По такому адресу страница не найдена, попробуйте воспользоваться меню выше, чтобы найти нужную информацию или уточните адрес страницы."
    />
    <section class="page-404 section page-404-ru">
      <div class="w-text page-400__wrapper">
        <div class="w-text page-400__text">
          <h1>Страница не найдена</h1>
          <p>По такому адресу страница не найдена, попробуйте воспользоваться меню выше, чтобы найти нужную информацию или уточните адрес страницы.</p>
        </div>
      </div>
    </section>
  </LayoutRU>

  <LayoutEN v-else>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameEN"
      metaTitle = "Page not found"
      metaDescription = "The page was not found at this URL, try using the navigation above to find the information you need or check for correctness of the page address."
    />
    <section class="page-404 section page-404-en">
      <div class="w-text page-400__wrapper">
        <div class="w-text page-400__text">
          <h1>Page not found</h1>
          <p>The page was not found at this URL, try using the navigation above to find the information you need or check for correctness of the page address.</p>
        </div>
      </div>
    </section>
  </LayoutEN>

</template>

<static-query>
  query {
    metadata {
      siteNameRU
    }
  }
</static-query>

<script>
export default {

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue')
  },

  data() {
    return {
      lang: 'EN',
      isRedirect: true,
    }
  },



  created() {
    if(this.$route.path.includes('ru')) {
      this.lang = 'RU'
    } 

    if(this.$route.path.includes('nko-otchet')) {
      window.location.href = '/nko-otchet'
    } else {
      this.isRedirect = false
    }
  }

}
</script>

<style scoped>

  .page-404 {
    padding-top: calc(var(--space) * 4);
    padding-bottom: 0;
    overflow: hidden;
  }

  .page-404 .page-400__wrapper  {
    max-width: 1160px;
    /* min-height: 746px; */
    min-height: calc(100vh - 168px - (var(--space) * 4));
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    background-image: url('~@/assets/images/404-page-img.png');
		background-size: 980px;
		background-repeat: no-repeat;
    background-position: bottom 0 center;
  }

  .page-400__wrapper p {
    font-weight: 500;
  }

  .page-400__text {
    padding: 0;
    min-height: 650px;
  }

  @media screen and (max-width: 750px)  {
    .page-404 .page-400__wrapper {
      margin-bottom: 95px;
    }
  }

  @media screen and (max-width: 460px) {
    .page-400__text {
      padding: 0;
      min-height: 756px;
    }
  }


</style>