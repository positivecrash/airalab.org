<template>
  <LayoutRU>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      :metaTitle = "'Ваш вклад в развитие индустрии'"
      :metaDescription = "this.$static.metadata.siteDescriptionRU"
    />

    <PageContent
      :title="'Ваш вклад в развитие индустрии'"
      :text = "'Мы автономная некоммерческая организация, занимаемся исследованиями в области Умных городов и Индустрии 4.0. При работе над проектами мы используем большое количество времени высококвалифицированных инженеров, деньги на сопутствующее оборудование, интернет и кофе. Познакомьтесь с нашей деятельностью, почитав <a class=link-bold  href=' + this.$static.metadata.blogRU + ' target=_blank>блог</a> или <a class=link-bold  href=' + '/ru/services' + '>информацию о разработках</a>'"
      :text2="'Если вам не безразлична судьба отрасли умной автоматизации в вашем регионе, здесь вы можете пожертвовать любую сумму от 100 рублей на развитие организации.'"
      qrcodeTitle = "Для перевода по QR-коду в интернет-банке"
      donateTitle = "Ваша сумма"
      :description = "'Разовый перевод с любой суммой от 100 руб'"
      :lang = "'ru'"
      :button = "'Перевести'"
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
