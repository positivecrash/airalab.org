<template>
  <LayoutEN>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameRU"
      metaTitle = "Water environmental inspector"
      metaDescription = "One of our ongoing developments is an unmanned surface catamaran-type environmental monitoring vehicle that collects water quality data."
    />

    <PageContent
      title = "Water environmental inspector"
      subtitle = "Our research"
      description = "One of our ongoing developments is an unmanned surface catamaran-type environmental monitoring vehicle that collects water quality data."
      howToTitle = "How it works"
      howToListItem1 = "The device is equipped with a compact set of sensors, on-board navigation and network connectivity, which allows it to autonomously inspect water bodies."
      howToListItem2 = "The user can input the specific route and other desired parameters and the vehicle will begin to take measurements."
      howToListItem3 = "The device will collect the data and provide online access as soon as it enters the network coverage area."
      advantagesTitle = "Advantages"
      :advantages="advantages"
      donationLink="en/donation"
      donationButton="Support us"
    />
  </LayoutEN>
</template>

<static-query>
  query {
    metadata {
      siteNameRU
    }
  }
</static-query>

<script>
export default {
  components: {
    PageContent: () => import('~/components/PageWaterMonitoring.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  },

  data() {
    return {
      advantages: [
        {
          id: 0,
          title: 'Flexible measurement settings',
          description: 'Depending on environmental conditions and pollution sources, different sensors may be needed. Our device is equipped with a whole range of compact water monitoring sensors.'
        },
        {
          id: 1,
          title: 'Reliability of received data',
          description: 'The collected data is published by the device as soon as it is in the network coverage area. The publication takes place on the blockchain, which guarantees their reliability and immutability.'
        },
        {
          id: 2,
          title: 'No analogues',
          description: 'В настоящий момент нет готовых аналогов подобного уровня. In 2022, the team conducted successful test launches of WEI in adverse weather conditions and used this data to design a new version of the vehicle. In addition, significant progress has been made in the development of algorithms for the autonomous distribution of a fleet of such devices around pollution sources.'
        }
      ]
    }
  }
}
</script>