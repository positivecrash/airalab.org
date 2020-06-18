<template>
  <LayoutEN>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameEN"
      :metaTitle = "'Contacts'"
      :metaDescription = "this.$static.metadata.siteDescriptionEN"
    />

    <PageContent :title="'Contacts'" :organization="'NPO ROBOTICS RESEARCH CENTRE AIRALAB RUS'" :phoneTitle="'Phone number'" :lang="'en'" />
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
    PageContent: () => import('~/components/PageContacts.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>
