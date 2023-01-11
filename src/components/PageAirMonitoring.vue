<template>
 
  	<ClientOnly>
    <div class="page-inside service air-monitoring">

    	<div class="w-text">
					<g-link class="breadcrumb-blue" :to="breadcrumbLink">{{breadcrumb}}</g-link>
	        <div class="texthighlight_yellow t-align-center"><h1 v-html="title" /></div>
       	</div>

		<div class="w-text t-align-center">
			<g-image id="banner" src="@/assets/images/air-monitoring-banner.png" alt="Banner for Air monitoring" />
	        <p>{{description}}</p>
	        <g-link to="https://sensors.robonomics.network/#/" class="btn-red">{{button}}</g-link>
      	</div>


      	<section id="cityair" class="section section-gray">
			<div class="w-text">
				<h2>{{h21}}</h2>

				<ol class="ol-anounce">
					<li>
            <p>{{list11}}</p>
          </li>
					<li>
            <p>{{list12}}</p>
          </li>
					<li>
            <p>{{list13}}</p>
          </li>
					<li>
            <p>{{list14}}</p>
          </li>
				</ol>
			</div>

			<g-image id="cityair-house" aria-hidden="true" src="@/assets/images/air-monitoring-city-house.png" />
		</section>

		<section class="section">
			<div class="w-text">
				<h2>{{h22}}</h2>
				<div v-html="plans"/>

				<div class="gallery-grid">
					<a href="/air-monitoring-eco-station-1.jpeg" target="_blank"><g-image :alt="plansALT" src="@/assets/images/air-monitoring-eco-station-1.jpeg" /></a>
					<a href="/air-monitoring-eco-station-2.jpeg" target="_blank"><g-image :alt="plansALT" src="@/assets/images/air-monitoring-eco-station-2.jpeg" /></a>
					<a href="/air-monitoring-eco-station-3.jpeg" target="_blank"><g-image :alt="plansALT" src="@/assets/images/air-monitoring-eco-station-3.jpeg" /></a>
					<a href="/air-monitoring-eco-station-4.jpeg" target="_blank"><g-image :alt="plansALT" src="@/assets/images/air-monitoring-eco-station-4.jpeg" /></a>
				</div>

				<div class="t-align-center">
					<g-link to="https://zen.yandex.ru/id/5b2f619a3acfb800a8af799a">{{plansLink}}</g-link>
				</div>
			</div>
		</section>

<!-- 
		<section class="section section-yellow">
			<div class="w-text t-align-center">
				<h3 v-html="commitTitle"/>
				<g-link to="https://wiki.robonomics.network/docs/en/connect-sensor-to-robonomics/" class="btn-red">{{button2}}</g-link>
			</div>
			<div class="hr-wave"></div>
			<div id="yellowList" class="w-text t-align-center" v-html="commitSteps" />
		</section> -->

		<Donation :imgClass="imgClass" :donationLink="linkDonate" :donationButton="donationButton" :specialClass="specialClass"/>

	</div>

	</ClientOnly>

</template>


<style scoped>

	.air-monitoring.page-inside {
		padding-bottom: 0;
	}

	#banner {
		margin: calc(var(--space)*2) 0;
	}

	#cityair {
		background-image: url('~@/assets/images/air-monitoring-city.png');
		background-size: 980px;
		background-repeat: repeat-x;
		background-position: 0 100%;
		padding-bottom: 115px;
		position: relative;
	}

	#cityair > .w-text {
		position: relative;
		z-index: 1;
	}

	#cityair-house {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 60%;
		max-width: 800px;
		z-index: 0;
	}

	@media screen and (max-width: 900px) {
		#cityair {
			padding-bottom: 250px;
		}
	}

	@media screen and (max-width: 560px) {
		#cityair-house {
			width: 100%;
		}
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

	.section-yellow {
		overflow: hidden;
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
			breadcrumb: { type: String, default: '' },
			breadcrumbLink: { type: String, default: '' },
      description: { type: String, default: '' },
      button: { type: String, default: '' },
      h21: { type: String, default: '' },
      list11: { type: String, default: '' },
      list12: { type: String, default: '' },
      list13: { type: String, default: '' },
      list14: { type: String, default: '' },
      h22: { type: String, default: '' },
      plans: { type: String, default: '' },
      plansALT: { type: String, default: '' },
      plansLink: { type: String, default: '' },
      commitTitle: { type: String, default: '' },
      commitSteps: { type: String, default: '' },
      button2: { type: String, default: '' },
      endString1: { type: String, default: '' },
      endString2: { type: String, default: '' },
      endString3: { type: String, default: '' },
      endString4: { type: String, default: '' },
      endString5: { type: String, default: '' },
      endString6: { type: String, default: '' },
      linkDonate: { type: String, default: '' },
			donationButton: { type: String, default: '' },
			imgClass: { type: String, default: '' },
			specialClass: { type: String, default: '' },
  	},

		components: {
			Donation: () => import('~/components/SupportUs.vue')
		},

  	computed: {
	    productNumber : function(){
	      return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
	    }
  	},
  	mounted: function(){
  		disable()
		setTimeout(enable, 500)
  	}
}
</script>

