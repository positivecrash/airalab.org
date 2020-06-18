<template>
  <LayoutRU>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      :metaTitle = "'Контакты'"
      :metaDescription = "this.$static.metadata.siteDescriptionRU"
    />

    <PageContent :title="'Контакты'" :organization="'АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР РОБОТОТЕХНИКИ АИРАЛАБ РУС'" :phoneTitle="'Телефон'" :lang="'ru'" />
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
    PageContent: () => import('~/components/PageContacts.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>
