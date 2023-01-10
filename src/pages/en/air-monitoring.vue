<template>
  <LayoutEN>
    <MetaInfo
      :metaSiteName = "this.$static.metadata.siteNameEN"
      metaTitle = "Public Air Quality Monitoring Network"
      metaDescription = "We have launched, continuously developing and increasing decentralized network of independent air sensors worldwide. 
      This can be helpful for all those interested in air pollution monitoring without any third party manipulation the results. 
      Make the invisible visible with already installed sensors by our community members or join with your sensor for free."
    />

    <PageContent
      title = "Public Air Quality Monitoring Network"
      subtitle = "Our research"
      description = "We have launched, continuously developing and increasing decentralized network of independent air sensors worldwide. 
      This can be helpful for all those interested in air pollution monitoring without any third party manipulation the results. 
      Make the invisible visible with already installed sensors by our community members or join with your sensor for free."
      button = "View the map"
      h21 = "Independent sensors, come together!"
      list11 = "Scalable independent sensor network, unlimited by geography and municipal regulations"
      list12 = "Community contributors, skilled engineers and researchers driven"
      list13 = "Fault tolerance and transparency, explained by the modern capabilities of public chains using blockchain technology"
      list14 = "For citizens, the network allows you to monitor air quality at any time, for environmental services the network allows to respond more quickly to emissions"
      h22 = "Environmental monitoring launched"
      plans = "<p>In the summer of 2021, we are launching the first urban sensor network for monitoring the environmental situation in Russia based on IPFS + Polkadot.</p>
      <p>For 3 months we will test the prompt sending of data for rechecking by the mobile laboratory of Togliatti State University (TSU) and the rapid further response of environmental services, if necessary.</p>
      <p>Through this interaction, we can shorten the response time to emissions and leaks from days to hours.</p>"
      plansALT = "Air quality monitoring together with a mobile ecological station in Togliatti, Airalab"
      plansLink = "Read more in the blog"
      commitTitle = "You can assemble your sensor, <br/>put it in the place you want and become part of the decentralized independent ecological network"
      commitSteps = "<p>The simplest equipment is enough, yes, even from that Chinese site</p>
				<p>Our firmware allows us to support not only our network, but also Sensor.Community</p>
				<p>Work with the familiar airRohr interface if you already support Sensor.Community</p>
				<p>Install sensors in your apartment, office, your yard. For example, we negotiated with the city and installed them directly <a href='https://zen.yandex.ru/media/id/5b2f619a3acfb800a8af799a/set-grajdanskogo-monitoringa-v-toliatti-rasshiriaetsia-ustanovleno-20-priborov-kontrolia-606d6b1641e5c84b899fd4fe' target='_blank'>on the banners</a></p>"
      button2 = "Technical documentation"
      endString1 = "If you do not know how yet, but want to participate in the development of the"
      endString2 = "network"
      endString3 = "you can write us an"
      endString4 = "or"
      endString5 = "help"
      endString6 = "donations from 100 rubles"
      linkDonate = "/en/donation"
      donationButton="Support us"
      specialClass="air-monitoring-en"
    />
  </LayoutEN>
</template>

<static-query>
  query {
    metadata {
      siteNameEN
    }
  }
</static-query>

<script>
export default {
  components: {
    PageContent: () => import('~/components/PageAirMonitoring.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>