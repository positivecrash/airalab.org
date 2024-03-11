<template>
  <LayoutEN>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameEN"
      metaTitle = "Our projects"
      :metaDescription = "this.$static.metadata.siteDescriptionEN"
    />

    <PageContent 
      title="Our Projects"
      service1Title="Водный дрон-эколог"
      service1Link="/en/aira-flot"
      service1Desc="Водный дрон-эколог от компании «Аира Флот» — беспилотное надводное судно, используемое для мониторинга водоемов как в ручном,так и в полностью автоматизированном режиме"
      serviceBtn="Learn more"
    />
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
    PageContent: () => import('~/components/PageProjects.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>
