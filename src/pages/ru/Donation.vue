<template>
  <LayoutRU>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      :metaTitle = "'Поддержите наши исследования'"
      :metaDescription = "this.$static.metadata.siteDescriptionRU"
    />

    <PageContent
      :title="'Поддержите наши исследования'"
      :text = "'При работе над проектами мы используем большое количество времени высококвалифицированных инженеров, деньги на сопутствующее оборудование, интернет и кофе. Если вам нравится <a href=https://zen.yandex.ru/id/5b2f619a3acfb800a8af799a target=_blank>наша деятельность</a>, станьте нашим другом и внесите свой вклад в развитие Умных городов и Индустрии 4.0 в России.'"
      :description = "'Разовая поддержка любой суммой от 100 руб.'"
      :lang = "'ru'"
      :button = "'Поддержать'"
    />
  </LayoutRU>
</template>

<static-query>
  query {
    metadata {
      siteNameRU,
      siteDescriptionRU,
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
