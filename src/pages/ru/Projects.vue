<template>
  <LayoutRU>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      metaTitle = "Наши проекты"
      :metaDescription = "this.$static.metadata.siteDescriptionRU"
    />

    <PageContent 
      title="Наши проекты"
      service1Title="Водный дрон-эколог"
      service1Link="/ru/aira-flot"
      service1Desc="Водный дрон-эколог от компании «Аира Флот» — беспилотное надводное судно, используемое для мониторинга водоемов как в ручном,так и в полностью автоматизированном режиме"
    />
  </LayoutRU>
</template>

<static-query>
  query {
    metadata {
      siteNameRU,
      siteDescriptionRU
    }
  }
</static-query>

<script>
export default {
  components: {
    PageContent: () => import('~/components/PageProjects.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>
