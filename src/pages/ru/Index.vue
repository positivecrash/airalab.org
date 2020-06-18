<template>
  <LayoutRU>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      :metaTitle = "'Главная'"
      :metaDescription = "this.$static.metadata.siteDescriptionRU"
    />

    <PageContent :title="this.$static.metadata.siteDescriptionRU" />
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
    PageContent: () => import('~/components/PageIndex.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>
