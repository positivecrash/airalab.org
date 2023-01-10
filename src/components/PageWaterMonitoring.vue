<template>
 
  <ClientOnly>
  <div id="waterMonitoring" class="page-inside service">

    <div class="w-text">
      <h2 class="subtitle-blue">{{subtitle}}</h2>
      <div class="texthighlight_yellow t-align-center"><h1 v-html="title" /></div>
    </div>

    <div class="w-text t-align-center water-monitoring__banner">
      <g-image id="banner" src="@/assets/images/water-monitoring-banner.png" alt="Banner for Water monitoring" />
      <p>{{description}}</p>
    </div>


    <section id="waterMonitoringWorks" class="section section-gray">
      <div class="w-text">
        <h2>{{howToTitle}}</h2>

        <ol class="ol-anounce">
          <li>
            <p>{{howToListItem1}}</p>
          </li>
          <li>
            <p>{{howToListItem2}}</p>
          </li>
          <li>
            <p>{{howToListItem3}}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section">
      <div class="w-text">
        <h2>{{advantagesTitle}}</h2>

        <AdvantagesItem  
          v-for="advantage in advantages" 
          :key="advantage.id" 
          :title="advantage.title"
          :description="advantage.description"
        />

        <div class="t-align-center water-monitoring__link" v-if="advantagesLink">
          <g-link to="https://zen.yandex.ru/id/5b2f619a3acfb800a8af799a">{{advantagesLink}}</g-link>
        </div>
      </div>
    </section>

    <Donation :imgClass="imgClass" :donationLink="donationLink" :donationButton="donationButton"/>

  </div>

</ClientOnly>

</template>


<style scoped>

#waterMonitoring.page-inside {
  padding-bottom: 0;
  height: 100%;
}

#banner {
  margin: calc(var(--space)*2) 0;
}

.water-monitoring__banner {
  font-weight: 500;
}

#yellowList { font-weight: 500; }
#yellowList p {
  position: relative;
}

#yellowList p:not(:last-child) {
  margin-bottom: calc(var(--space)*2);
}

#yellowList p::before, #yellowList p::after {
  content: "";
  width: 100px;
  height: 2px;
  background: var(--color-light);
  position: absolute;
  top: calc(50%/2 - 1px)
}

#yellowList p::before { left: -120px }
#yellowList p::after { right: -120px }

@media screen and (max-width: 760px) {
  #yellowList p::before, #yellowList p::after { display: none; }

  #yellowList p:not(:last-child) { 
    border-bottom: 1px solid var(--color-light);
    padding-bottom: calc(var(--space)*2);
  }
  
}

.water-monitoring__link a{
  text-decoration: none;
  font-weight: 500;
}


</style>

<static-query>
query {
metadata {
  email
}
}
</static-query>

<script>

import { enable, disable } from 'vue-in-viewport-directive'

export default {

props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    description: { type: String, default: '' },
    howToTitle: { type: String, default: '' },
    howToListItem1: { type: String, default: '' },
    howToListItem2: { type: String, default: '' },
    howToListItem3: { type: String, default: '' },
    howToListItem4: { type: String, default: '' },
    advantagesTitle: { type: String, default: '' },
    advantages: { type: Array, default: [] },
    advantagesLink: { type: String, default: '' },
    donationLink: { type: String, default: '' },
    donationButton: { type: String, default: '' },
    imgClass: { type: String, default: '' },
  },

  components: {
    AdvantagesItem: () => import('~/components/PageWaterMonitoringItem.vue'),
    Donation: () => import('~/components/SupportUs.vue')
  },

  mounted: function(){
    disable()
    setTimeout(enable, 500)
  }
}
</script>