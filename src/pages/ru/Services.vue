<template>
  <LayoutRU>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      metaTitle = "Наши разработки"
      :metaDescription = "this.$static.metadata.siteDescriptionRU"
    />

    <PageContent 
      title="Наши разработки"
      service1Title="Сеть гражданского мониторинга"
      service1Link="/ru/air-monitoring"
      service1Desc="Мы разработали и расширяем сеть независимых датчиков воздуха по всему миру. 
            Это может быть полезно для всех неравнодушных граждан, которые хотят знать реальное состояние атмосферного 
            воздуха в той или иной местности. Вы можете смотреть данные с уже установленных датчиков или 
            присоединиться к сети датчиков бесплатно."
      service2Title = "Публичный блокчейн штамп"
      service2Link = "/ru/service-blockchain-stamp"
      service2Desc = "Выпускайте web3 цифровые сертификаты и паспорта продукции и повышайте доверие к произведенной вами продукции или оказанным услугам"
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
    PageContent: () => import('~/components/PageServices.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>
