<template>
  <LayoutRU>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      :metaTitle = "'Контакты'"
      :metaDescription = "this.$static.metadata.siteDescriptionRU"
    />

    <PageContent :title="'Контакты'" :organization="'АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР РОБОТОТЕХНИКИ АИРАЛАБ РУС'" organizationDescription="Мы занимаемся разработками ИТ-решений для проектов в сфере -  Умного города, Умного дома и Умного производства" address="Адрес" :addressDescription="'445043, Самарская область, г.Тольятти, Южное Шоссе, зд. 163, ком. 88'" :lang="'ru'" />
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
