<template>

    <div class="aira-flot">
      <MetaInfo
        :metaSiteName = "this.$static.metadata.siteNameRU"
        metaTitle = "Водный дрон-эколог"
        metaDescription = "Водный дрон-эколог от компании «Аира Флот» — беспилотное надводное судно, используемое для мониторинга водоемов как в ручном,так и в полностью автоматизированном режиме"
      />

      <Banner/>

      <section class="aira-flot-dark-blue">
        <div class="aira-flot-layout">

        </div>
      </section>

    </div>


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
    MetaInfo: () => import('~/components/MetaInfo.vue'),
    Banner: () => import('~/components/aira-flot/Banner.vue')
  },
}
</script>

<style scoped>

  .aira-flot-dark-blue {
    min-height: 300px;
    background-color: var(--aira-flot-darkest-blue);
  }

</style>