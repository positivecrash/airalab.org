<template>
  <LayoutRU>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      :metaTitle = "'Поддержите наши исследования'"
      :metaDescription = "this.$static.metadata.siteDescriptionRU"
    />

    <PageContent
      :title="'Поддержите наши исследования'"
      :text = "'Мы российская автономная некоммерческая организация, занимаемся исследованиями в области Умных городов и Индустрии 4.0. При работе над проектами мы используем большое количество времени высококвалифицированных инженеров, деньги на сопутствующее оборудование, интернет и кофе. Познакомьтесь с нашей деятельностью, почитав <a href=' + this.$static.metadata.blogRU + ' target=_blank>блог</a> или <a href=' + '/ru/services' + '>информацию о разработках</a>'"
      qrcodeTitle = "Сканируйте QR-код в своем интернет-банке"
      donateTitle = "Или воспользуйтесь онлайн-формой"
      :description = "'Разовая поддержка любой суммой от 100 руб'"
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
      blogRU 
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
