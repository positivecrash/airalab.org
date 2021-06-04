<template>
  <LayoutEN>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameEN"
      metaTitle = "Services"
      :metaDescription = "this.$static.metadata.siteDescriptionEN"
    />

    <PageContent 
      title="Services"
      service1Title="Public Air Quality Monitoring Network"
      service1Link="/en/air-monitoring"
      service1Desc="We have launched, continuously developing and increasing decentralized network of independent air sensors worldwide. 
      This can be helpful for all those interested in air pollution monitoring without any third party manipulation the results. 
      Make the invisible visible with already installed sensors by our community members or join with your sensor for free."
      serviceBtn="Learn more"
      service2Title = "Public blockchain stamp"
      service2Link = "/en/service-blockchain-stamp"
      service2Desc = "Prove the originality of any product data with digital blockchain web3 stamps. Increase client confidence with tamper-proof automated shareable audit trail."
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
    PageContent: () => import('~/components/PageServices.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>
