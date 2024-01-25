<template>
  <LayoutEN>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameEN"
      :metaTitle = "'Contacts'"
      :metaDescription = "this.$static.metadata.siteDescriptionEN"
    />

    <PageContent :title="'Contacts'" :organization="'NPO ROBOTICS RESEARCH CENTRE AIRALAB RUS'" organizationDescription="We are developing IT solutions for projects in the field of Smart City, Smart Home and Smart Manufacturing" address="Address" addressDescription="445043, Samara region, Togliatti, Yuzhnoe Highway, building 163, 88" :lang="'en'" />
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
