<template>
 
  	<ClientOnly>
    <div class="page-inside service">

    	<div class="w-text">
					<g-link class="breadcrumb-blue" :to="breadcrumbLink">{{breadcrumb}}</g-link>
	        <div class="texthighlight_yellow t-align-center"><h1 v-html="title" /></div>
       	</div>

		<div class="shrimps" v-in-viewport.once>
	
			<g-image class="shrimps__pack" alt="" src="@/assets/images/shrimp-pack.png" :immediate="true"/>

			<div class="shrimps__ice shrimps__ice_1"><g-image alt="" src="@/assets/images/shrimp-ice.png" :immediate="true"/></div>
			<div class="shrimps__ice shrimps__ice_2"><g-image alt="" src="@/assets/images/shrimp-ice.png" :immediate="true"/></div>
			<div class="shrimps__ice shrimps__ice_3"><g-image alt="" src="@/assets/images/shrimp-ice.png" :immediate="true"/></div>
			<div class="shrimps__ice shrimps__ice_4"><g-image alt="" src="@/assets/images/shrimp-ice.png" :immediate="true"/></div>
			<div class="shrimps__ice shrimps__ice_5"><g-image alt="" src="@/assets/images/shrimp-ice.png" :immediate="true"/></div>
			<div class="shrimps__ice shrimps__ice_6"><g-image alt="" src="@/assets/images/shrimp-ice.png" :immediate="true"/></div>
			<div class="shrimps__ice shrimps__ice_7"><g-image alt="" src="@/assets/images/shrimp-ice.png" :immediate="true"/></div>
			<div class="shrimps__ice shrimps__ice_8"><g-image alt="" src="@/assets/images/shrimp-ice.png" :immediate="true"/></div>


			<div class="shrimps__right">
				<div class="shrimps__right__item shrimps__right__item_1"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
				<div class="shrimps__right__item shrimps__right__item_2"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
				<div class="shrimps__right__item shrimps__right__item_3"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
				<div class="shrimps__right__item shrimps__right__item_4"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
				<div class="shrimps__right__item shrimps__right__item_5"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
			</div>

			<div class="shrimps__left">
				<div class="shrimps__left__item shrimps__left__item_1"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
				<div class="shrimps__left__item shrimps__left__item_2"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
				<div class="shrimps__left__item shrimps__left__item_3"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
				<div class="shrimps__left__item shrimps__left__item_4"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
				<div class="shrimps__left__item shrimps__left__item_5"><g-image alt="" src="@/assets/images/shrimp.png" :immediate="true"/></div>
			</div>

			<div class="shrimps__qr"><g-image alt="" src="@/assets/images/shrimp-qr.png" :immediate="true"/></div>

			<div class="shrimps__pack_2"><g-image alt="" src="@/assets/images/shrimp-pack-2.png" :immediate="true"/></div>
			<div class="shrimps__pack_3"><g-image alt="" src="@/assets/images/shrimp-pack-3.png" :immediate="true"/></div>
			<div class="shrimps__pack_4"><g-image alt="" src="@/assets/images/shrimp-pack-2.png" :immediate="true"/></div>

			<div class="shrimps__pack_5"><g-image alt="" src="@/assets/images/shrimp-pack-3.png" :immediate="true"/></div>
			<div class="shrimps__pack_6"><g-image alt="" src="@/assets/images/shrimp-pack-2.png" :immediate="true"/></div>
			<div class="shrimps__pack_7"><g-image alt="" src="@/assets/images/shrimp-pack-3.png" :immediate="true"/></div>

		</div>
		

		<div class="w-text t-align-center">
	        <p>{{ description }}</p>
	        <g-link :to="'mailto:'+$static.metadata.email" target="_blank" class="btn-red" v-html="button1" />
      	</div>


      	<section class="section section-gray">
			<div class="w-text">
				<h2>{{ block1title }}</h2>
				<p class="t-align-center">{{ block1description }}</p>
			</div>

			<div class="stampTech">
				<div class="stampTech__options w-text">
					<div class="stampTech__options__item">
						<div class="stampTech__options__item__img">
							<b>1</b>
							<g-image alt="block1title + ', 1'" src="@/assets/images/stampTech-1.png"/>
						</div>
						<p><strong>{{ block1opt1 }}</strong></p>
					</div>
					<div class="stampTech__options__item">
						<div class="stampTech__options__item__img">
							<b>2</b>
							<g-image alt="block1title + ', 2'" src="@/assets/images/stampTech-2.png"/>
						</div>
						<p><strong>{{ block1opt2 }}</strong></p>
					</div>
				</div>


				<div class="stampTech__product" v-in-viewport.once>
				
					<div class="stampTech__product__gray">

						<g-image class="item" src="@/assets/images/product_1_g@2x.png" v-if="productNumber === 1"/>
						<g-image class="item" src="@/assets/images/product_2_g@2x.png" v-if="productNumber === 2"/>
						<g-image class="item" src="@/assets/images/product_3_g@2x.png" v-if="productNumber === 3"/>
						<g-image class="item" src="@/assets/images/product_4_g@2x.png" v-if="productNumber === 4"/>
						<g-image class="item" src="@/assets/images/product_5_g@2x.png" v-if="productNumber === 5"/>

					</div>
					<div class="stampTech__product__color">
						<g-image class="item" src="@/assets/images/product_1_c@2x.png" v-if="productNumber === 1"/>
						<g-image class="item" src="@/assets/images/product_2_c@2x.png" v-if="productNumber === 2"/>
						<g-image class="item" src="@/assets/images/product_3_c@2x.png" v-if="productNumber === 3"/>
						<g-image class="item" src="@/assets/images/product_4_c@2x.png" v-if="productNumber === 4"/>
						<g-image class="item" src="@/assets/images/product_5_c@2x.png" v-if="productNumber === 5"/>

					</div>
				</div>
			</div>
			
		</section>

		<section class="w-base t-align-center">
	        <h2>{{ block2title }}</h2>
	        <div class="grid grid-c3 collaborate">
	        	<div class="collaborate__item">
	        		<div class="inside">
	        			<div class="collaborate__item__img">
	        				<g-image alt="block2title + ', 1'" src="@/assets/images/collaborate-i-1.png"/>
	        			</div>
	        			<strong>{{ block2step1 }}</strong>
	        		</div>
	        	</div>
	        	<div class="collaborate__item">
	        		<div class="inside">
	        			<div class="collaborate__item__img">
	        				<g-image alt="block2title + ', 2'" src="@/assets/images/collaborate-i-2.png"/>
	        			</div>
	        			<strong>{{ block2step2 }}</strong>
	        		</div>
	        	</div>
	        	<div class="collaborate__item">
	        		<div class="inside">
	        			<div class="collaborate__item__img">
	        				<g-image alt="block2title + ', 3'" src="@/assets/images/collaborate-i-3.png"/>
	        			</div>
	        			<strong>{{ block2step3 }}</strong>
	        		</div>
	        	</div>
	        </div>

	        <g-link :to="block2buttonLink" target="_blank" class="btn-red">{{ block2button }}</g-link>
      	</section>

      	<section class="section section-gray">
			<div class="w-text">
				<h2>{{ block3title }}</h2>
				<article class="section_half">
					<div class="texthighlight_yellow t-align-left"><h3>{{ block3opt1title }}</h3></div>
					<p>{{ block3opt1description }}</p>
				</article>
				<article class="section_half">
					<div class="texthighlight_yellow t-align-left"><h3>{{ block3opt2title }}</h3></div>
					<p>{{ block3opt2description }}</p>
				</article>
				<article class="section_half">
					<div class="texthighlight_yellow t-align-left"><h3>{{ block3opt3title }}</h3></div>
					<p>{{ block3opt3description }}</p>
				</article>
				<article class="section_half">
					<div class="texthighlight_yellow t-align-left"><h3>{{ block3opt4title }}</h3></div>
					<p>{{ block3opt4description }}</p>
				</article>
			</div>
		</section>

		<div class="w-text">{{ block4text }} <g-link :to="'mailto:'+$static.metadata.email" target="_blank">{{ $static.metadata.email }}</g-link></div>

	</div>

	</ClientOnly>

</template>


<style scoped>

.collaborate__item .inside {
	padding-left: var(--space);
	padding-right: var(--space);
	padding-top: calc(var(--space)*2);
	padding-bottom: calc(var(--space)*2);
}

.collaborate__item__img img {
	display: inline-block;
	max-width: 100%;
}

@media screen and (max-width: 720px){
	.collaborate__item__img img { max-width: 50%; }
}

.shrimps {
	margin-bottom: calc(var(--space)*2);
	overflow: hidden;
	position: relative;
	text-align: center;
}

.shrimps__pack {
	position: relative;
	transform: scale(0);
	transform-origin: 50% 50%;
	width: 212px;
	z-index: 10;
}

*[class *= 'shrimps__pack_']:not(.shrimps__pack_1) {
	left: 50%;
	opacity: 0;
	position: absolute;
	top: 0;
	width: 212px;
}

*[class *= 'shrimps__pack_']:not(.shrimps__pack_1) img {
	width: 100%;
}

.shrimps__ice {
	opacity: 0;
	position: absolute;
	width: 70px;
	z-index: 9;
}

.shrimps__ice img { width: 100%; }

.shrimps__ice_1 {
	left: calc(50% + 10px);
	top: 80px;
	transform: scale(.8);
}

.shrimps__ice_2 {
	left: calc(50% - 10px);
	top: 120px;
	transform: scale(.5) rotate(40deg);
}

.shrimps__ice_3 {
	left: calc(50% - 60px);
	top: 125px;
	transform: scale(0.72) rotate(-90deg);
}

.shrimps__ice_4 {
	left: calc(50% - 70px);
	top: 50px;
	transform: scale(.45) rotate(-40deg);
}

.shrimps__ice_5 {
	left: calc(50% + 30px);
	top: 160px;
	transform: scale(.58) rotate(10deg);
}

.shrimps__ice_6 {
	left: calc(50% + 10px);
	top: 170px;
	transform: scale(.6) rotate(-40deg);
}

.shrimps__ice_7 {
	left: calc(50% - 40px);
	top: 200px;
	transform: scale(1.1) rotate(70deg);
}

.shrimps__ice_8 {
	left: calc(50% + 20px);
	top: 230px;
	transform: scale(.65) rotate(30deg);
}

.shrimps__right, .shrimps__left {
	bottom: 0;
	position: absolute;
	top: 0;
	width: 50%;
}

.shrimps__right__item, .shrimps__left__item {
	opacity: 0;
	position: absolute;
	top: 0;
	transform-origin: 50% 50%;
	width: 90px;
}

.shrimps__right__item img, .shrimps__left__item img {
	width: 100%;
}

.shrimps__right { right: 0; }
.shrimps__right__item { left: 300px; }
.shrimps__left { left: 0; }
.shrimps__left__item { right: 300px; }

.shrimps__qr {
	bottom: 40px;
	left: calc( 50% + 10px );
	opacity: 0;
	position: absolute;
	width: 60px;
	z-index: 12;
}

.shrimps__qr img {
	width: 100%;
}

/* rudiment from scss, need to be rewritten */
.shrimps {
	--start_ice: 1.5s;
	--speed_ice: 0.4s;
	--speed_shrimp: 0.6s;
	--speed_qr: 0.4s;
	--func_shrimp: cubic-bezier(.02,.52,.98,.01);
	--func_packs: cubic-bezier(0,.59,.57,.18);
}
.shrimps.in-viewport .shrimps__pack { animation: 1s cubic-bezier(.02,.52,.69,-0.3) 0.6s scaleIn forwards; }
.shrimps.in-viewport .shrimps__ice_1 { animation: var(--speed_ice) ease-in var(--start_ice) fadeIn forwards; }
.shrimps.in-viewport .shrimps__ice_2 { animation: var(--speed_ice) ease-in calc(var(--start_ice)/2) fadeIn forwards; }
.shrimps.in-viewport .shrimps__ice_3 { animation: var(--speed_ice) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 2) fadeIn forwards; }
.shrimps.in-viewport .shrimps__ice_4 { animation: var(--speed_ice) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 3) fadeIn forwards; }
.shrimps.in-viewport .shrimps__ice_5 { animation: var(--speed_ice) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 4) fadeIn forwards; }
.shrimps.in-viewport .shrimps__ice_6 { animation: var(--speed_ice) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 5) fadeIn forwards; }
.shrimps.in-viewport .shrimps__ice_7 { animation: var(--speed_ice) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 6) fadeIn forwards; }
.shrimps.in-viewport .shrimps__ice_8 { animation: var(--speed_ice) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 7) fadeIn forwards; }

.shrimps.in-viewport .shrimps__right__item_1{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 7) shrimp1 forwards; }
.shrimps.in-viewport .shrimps__right__item_2{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 8) shrimp2 forwards; }
.shrimps.in-viewport .shrimps__right__item_3{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 9) shrimp3 forwards; }
.shrimps.in-viewport .shrimps__right__item_4{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 10) shrimp4 forwards; }
.shrimps.in-viewport .shrimps__right__item_5{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 11) shrimp5 forwards; }

.shrimps.in-viewport .shrimps__left__item_1{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 7) shrimp6 forwards; }
.shrimps.in-viewport .shrimps__left__item_2{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 8) shrimp7 forwards; }
.shrimps.in-viewport .shrimps__left__item_3{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 9) shrimp8 forwards; }
.shrimps.in-viewport .shrimps__left__item_4{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 10) shrim9 forwards; }
.shrimps.in-viewport .shrimps__left__item_5{ animation: var(--speed_shrimp) var(--func_shrimp) calc(var(--start_ice) + (var(--speed_ice)/2) * 11) shrimp10 forwards; }


.shrimps.in-viewport .shrimps__qr{ animation: var(--speed_qr) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 15) fadeIn forwards; }

.shrimps.in-viewport .shrimps__pack_2 {
	animation: var(--speed_qr) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 17) fadeIn forwards, var(--speed_qr) var(--func_packs) calc(var(--start_ice) + (var(--speed_ice)/2) * 17) pack2 forwards;
}

.shrimps.in-viewport .shrimps__pack_3 {
	animation: var(--speed_qr) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 17) fadeIn forwards, var(--speed_qr) var(--func_packs) calc(var(--start_ice) + (var(--speed_ice)/2) * 17) pack3 forwards;
}

.shrimps.in-viewport .shrimps__pack_4 {
	animation: var(--speed_qr) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 17) fadeIn forwards, var(--speed_qr) var(--func_packs) calc(var(--start_ice) + (var(--speed_ice)/2) * 17) pack4 forwards;
}

.shrimps.in-viewport .shrimps__pack_5 {
	animation: var(--speed_qr) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 17) fadeIn forwards, var(--speed_qr) var(--func_packs) calc(var(--start_ice) + (var(--speed_ice)/2) * 17) pack5 forwards;
}

.shrimps.in-viewport .shrimps__pack_6 {
	animation: var(--speed_qr) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 17) fadeIn forwards, var(--speed_qr) var(--func_packs) calc(var(--start_ice) + (var(--speed_ice)/2) * 17) pack6 forwards;
}

.shrimps.in-viewport .shrimps__pack_7 {
	animation: var(--speed_qr) ease-in calc(var(--start_ice) + (var(--speed_ice)/2) * 17) fadeIn forwards, var(--speed_qr) var(--func_packs) calc(var(--start_ice) + (var(--speed_ice)/2) * 17) pack7 forwards;
}



.stampTech {
	position: relative;
	margin-bottom: var(--space);
}

.stampTech__options {
	box-sizing: border-box;
	display: table;
	margin-top: var(--space);
	position: relative;
	table-layout: fixed;
	z-index: 1;
}

.stampTech__options__item {
	background-color: var(--color-light);
	box-sizing: border-box;
	display: table-cell;
	padding: 2rem 4rem;
	position: relative;
	width: 50%;
}

.stampTech__options__item:after {
	background-color: var(--color-yellow);
	bottom: -1rem;
	content:"";
	position: absolute;
	right: 0;
	top: -1rem;
	width: 1px;
}

.stampTech__options__item:before {
	background-color: var(--color-yellow);
	bottom: 0;
	content:"";
	display: none;
	height: 1px;
	left: 0;
	position: absolute;
	right: 0;
}

.stampTech__options__item:last-child:after {
	display: none;
}

.stampTech__options__item__img {
	margin-bottom: var(--space);
	position: relative;
}

.stampTech__options__item__img img {
	max-width: 100%;
}

.stampTech__options__item__img > b {
	background-color: var(--color-yellow);
	border: .5rem solid var(--color-light);
	bottom: 20px;
	font-size: 4rem;
	font-weight: 700;
	left: -20px;
	line-height: 1;
	padding: .5rem 1rem;
	position: absolute;
	z-index: 10;
}

.stampTech__product {
	--duration-product: 5s;
	--delay-product: 1s;

	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	width: 100%;
	z-index: 0;
}

.stampTech__product__gray, .stampTech__product__color {
	display: inline-block;
	overflow: hidden;
	white-space: nowrap;
	width: 50%;
}

.stampTech__product__gray .item, .stampTech__product__color .item {
	display: inline-block;
	left: -1000px;
	margin-right: 4rem;
	opacity: 0;
	transform: translate3d(0, 0, 0);
}

.stampTech__product.in-viewport .stampTech__product__gray .item {
	animation: moveProd var(--duration-product) ease var(--delay-product) infinite backwards, fadeIn 0.2s linear var(--delay-product) forwards;
}

.stampTech__product.in-viewport .stampTech__product__color .item {
	animation: moveProd var(--duration-product) ease calc(var(--duration-product)/2 ) infinite backwards, fadeIn 0.2s linear calc(var(--duration-product)/2) forwards;
}

@media screen and (max-width: 1000px) {
	.stampTech__product { display: none; }
}

@media screen and (max-width: 660px) {
	.stampTech__options { display: block; }
	.stampTech__options__item {
		display: block;
		width: 100%;
	}
	.stampTech__options__item:after{ display: none; }
	.stampTech__options__item:before { display: block; }
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
      description: { type: String, default: '' },
			breadcrumb: { type: String, default: '' },
			breadcrumbLink: { type: String, default: '' },
      button1: { type: String, default: '' },

      block1title: { type: String, default: '' },
      block1description: { type: String, default: '' },
      block1opt1: { type: String, default: '' },
      block1opt2: { type: String, default: '' },

      block2title: { type: String, default: '' },
      block2step1: { type: String, default: '' },
      block2step2: { type: String, default: '' },
      block2step3: { type: String, default: '' },
      block2button: { type: String, default: '' },
      block2buttonLink: { type: String, default: '' },

      block3title: { type: String, default: '' },
      block3opt1title: { type: String, default: '' },
      block3opt1description: { type: String, default: '' },
      block3opt2title: { type: String, default: '' },
      block3opt2description: { type: String, default: '' },
      block3opt3title: { type: String, default: '' },
      block3opt3description: { type: String, default: '' },
      block3opt4title: { type: String, default: '' },
      block3opt4description: { type: String, default: '' },

      block4text: { type: String, default: '' },
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

