<template>
  <LayoutEN>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameEN"
      :metaTitle = "'Support our research'"
      :metaDescription = "this.$static.metadata.siteDescriptionEN"
    />

    <PageContent
      :title="'Support our research'"
      :text = "'When working on projects, we use a large amount of time of highly qualified engineers, money for related equipment, internet and coffee. If you like <a href=https://zen.yandex.ru/id/5b2f619a3acfb800a8af799a target=_blank>our activities</a>, become our friend and contribute to the development of Smart Cities and Industry 4.0 in Russia.'"
      :description = "'Single support by any amount from 100 rubles.'"
      :lang = "'en'"
      :button = "'Donate'"
    />
  </LayoutEN>
</template>

<static-query>
  query {
    metadata {
      siteNameEN,
      siteDescriptionEN,
      bloglink 
    }
  }
</static-query>

<script>
export default {
  components: {
    PageContent: () => import('~/components/PageDonation.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>
