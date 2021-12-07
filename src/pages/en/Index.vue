<template>
  <LayoutEN>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameEN"
      :metaTitle = "'Home'"
      :metaDescription = "this.$static.metadata.siteDescriptionEN"
    />

    <PageContent :title="this.$static.metadata.siteDescriptionEN" />
  </LayoutEN>
</template>

<static-query>
  query {
    metadata {
      siteNameEN,
      siteDescriptionEN
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

<style scoped>
  #app {
    background-color: var(--color-blue)
  }
</style>
