<template>
 
  	<ClientOnly>
    <div class="page-inside service">

    	<div class="w-text">
	        <div class="texthighlight_yellow t-align-center"><h1 v-html="title" /></div>
       	</div>

		<div class="shrimps" v-in-viewport.once>
	
			<g-image class="shrimps__pack" alt="" src="@/assets/images/shrimp-pack.png" immediate='true'/>

			<div class="shrimps__ice shrimps__ice_1"><g-image alt="" src="@/assets/images/shrimp-ice.png" immediate='true'/></div>
			<div class="shrimps__ice shrimps__ice_2"><g-image alt="" src="@/assets/images/shrimp-ice.png" immediate='true'/></div>
			<div class="shrimps__ice shrimps__ice_3"><g-image alt="" src="@/assets/images/shrimp-ice.png" immediate='true'/></div>
			<div class="shrimps__ice shrimps__ice_4"><g-image alt="" src="@/assets/images/shrimp-ice.png" immediate='true'/></div>
			<div class="shrimps__ice shrimps__ice_5"><g-image alt="" src="@/assets/images/shrimp-ice.png" immediate='true'/></div>
			<div class="shrimps__ice shrimps__ice_6"><g-image alt="" src="@/assets/images/shrimp-ice.png" immediate='true'/></div>
			<div class="shrimps__ice shrimps__ice_7"><g-image alt="" src="@/assets/images/shrimp-ice.png" immediate='true'/></div>
			<div class="shrimps__ice shrimps__ice_8"><g-image alt="" src="@/assets/images/shrimp-ice.png" immediate='true'/></div>


			<div class="shrimps__right">
				<div class="shrimps__right__item shrimps__right__item_1"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
				<div class="shrimps__right__item shrimps__right__item_2"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
				<div class="shrimps__right__item shrimps__right__item_3"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
				<div class="shrimps__right__item shrimps__right__item_4"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
				<div class="shrimps__right__item shrimps__right__item_5"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
			</div>

			<div class="shrimps__left">
				<div class="shrimps__left__item shrimps__left__item_1"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
				<div class="shrimps__left__item shrimps__left__item_2"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
				<div class="shrimps__left__item shrimps__left__item_3"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
				<div class="shrimps__left__item shrimps__left__item_4"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
				<div class="shrimps__left__item shrimps__left__item_5"><g-image alt="" src="@/assets/images/shrimp.png" immediate='true'/></div>
			</div>

			<div class="shrimps__qr"><g-image alt="" src="@/assets/images/shrimp-qr.png" immediate='true'/></div>

			<div class="shrimps__pack_2"><g-image alt="" src="@/assets/images/shrimp-pack-2.png" immediate='true'/></div>
			<div class="shrimps__pack_3"><g-image alt="" src="@/assets/images/shrimp-pack-3.png" immediate='true'/></div>
			<div class="shrimps__pack_4"><g-image alt="" src="@/assets/images/shrimp-pack-2.png" immediate='true'/></div>

			<div class="shrimps__pack_5"><g-image alt="" src="@/assets/images/shrimp-pack-3.png" immediate='true'/></div>
			<div class="shrimps__pack_6"><g-image alt="" src="@/assets/images/shrimp-pack-2.png" immediate='true'/></div>
			<div class="shrimps__pack_7"><g-image alt="" src="@/assets/images/shrimp-pack-3.png" immediate='true'/></div>

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


<style lang="scss">

	.collaborate{

		&__item{
			.inside{
				padding-left: var(--space);
				padding-right: var(--space);
				padding-top: calc(var(--space)*2);
				padding-bottom: calc(var(--space)*2);
			}

			&__img{
				img{
					display: inline-block;
					max-width: 100%;

					@media screen and (max-width: 720px){
						max-width: 50%;
					}
				}
			}
		}
	}

	$start_ice: 1.5s;
	$speed_ice: 0.4s;
	$speed_shrimp: 0.6s;
	$speed_qr: 0.4s;
	$func_shrimp: cubic-bezier(.02,.52,.98,.01);
	$func_packs: cubic-bezier(0,.59,.57,.18);

	.shrimps{
		text-align: center;
		margin-bottom: calc(var(--space)*2);
		position: relative;
		overflow: hidden;

		&__pack{
			transform: scale(0);
			transform-origin: 50% 50%;
			position: relative;
			z-index: 10;
			width: 212px;
		}

		&__pack_2, &__pack_3, &__pack_4, &__pack_5, &__pack_6, &__pack_7{
			position: absolute;
			left: 50%;
			opacity: 0;
			top: 0;
			width: 212px;

			img{
				width: 100%;
			}
		}

		&__ice{
			position: absolute;
			z-index: 9;
			opacity: 0;
			width: 70px;

			img { width: 100%; }
		}

		&__ice_1{
			transform: scale(.8);
			top: 80px;
			left: calc(50% + 10px);
		}

		&__ice_2{
			transform: scale(.5) rotate(40deg);
			top: 120px;
			left: calc(50% - 10px);
		}

		&__ice_3{
			transform: scale(0.72) rotate(-90deg);
			top: 125px;
			left: calc(50% - 60px);
		}

		&__ice_4{
			transform: scale(.45) rotate(-40deg);
			top: 50px;
			left: calc(50% - 70px);
		}

		&__ice_5{
			transform: scale(.58) rotate(10deg);
			top: 160px;
			left: calc(50% + 30px);
		}

		&__ice_6{
			transform: scale(.6) rotate(-40deg);
			top: 170px;
			left: calc(50% + 10px);
		}

		&__ice_7{
			transform: scale(1.1) rotate(70deg);
			top: 200px;
			left: calc(50% - 40px);
		}

		&__ice_8{
			transform: scale(.65) rotate(30deg);
			top: 230px;
			left: calc(50% + 20px);
		}

		&__right, &__left{
			position: absolute;
			top: 0;
			bottom: 0;
			width: 50%;

			&__item{
				position: absolute;
				transform-origin: 50% 50%;
				opacity: 0;
				top: 0;
				width: 90px;

				img{
					width: 100%;
				}
			}
		}

		&__right{
			right: 0;

			&__item{
				left: 300px;
			}
		}

		&__left{
			left: 0;

			&__item{
				right: 300px;
			}
		}

		&__qr{
			position: absolute;
			bottom: 40px;
			left: calc( 50% + 10px );
			z-index: 12;
			opacity: 0;
			width: 60px;

			img{
				width: 100%;
			}
		}

		&.in-viewport{
			.shrimps__pack{ animation: 1s cubic-bezier(.02,.52,.69,-0.3) 0.6s scaleIn forwards; }
			.shrimps__ice_1{ animation: $speed_ice ease-in $start_ice fadeIn forwards; }
			.shrimps__ice_2{ animation: $speed_ice ease-in $start_ice+$speed_ice/2 fadeIn forwards; }
			.shrimps__ice_3{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*2 fadeIn forwards; }
			.shrimps__ice_4{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*3 fadeIn forwards; }
			.shrimps__ice_5{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*4 fadeIn forwards; }
			.shrimps__ice_6{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*5 fadeIn forwards; }
			.shrimps__ice_7{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*6 fadeIn forwards; }
			.shrimps__ice_8{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*7 fadeIn forwards; }

			.shrimps__right__item_1{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*7 shrimp1 forwards; }
			.shrimps__right__item_2{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*8 shrimp2 forwards; }
			.shrimps__right__item_3{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*9 shrimp3 forwards; }
			.shrimps__right__item_4{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*10 shrimp4 forwards; }
			.shrimps__right__item_5{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*11 shrimp5 forwards; }


			.shrimps__left__item_1{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*7 shrimp6 forwards; }
			.shrimps__left__item_2{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*8 shrimp7 forwards; }
			.shrimps__left__item_3{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*9 shrimp8 forwards; }
			.shrimps__left__item_4{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*10 shrimp9 forwards; }
			.shrimps__left__item_5{ animation: $speed_shrimp $func_shrimp $start_ice+($speed_ice/2)*11 shrimp10 forwards; }

			.shrimps__qr{ animation: $speed_qr ease-in $start_ice+($speed_ice/2)*15 fadeIn forwards; }

			.shrimps__pack_2 {
				animation: $speed_qr ease-in $start_ice+($speed_ice/2)*17 fadeIn forwards, $speed_qr $func_packs $start_ice+($speed_ice/2)*17 pack2 forwards;
			}

			.shrimps__pack_3 {
				animation: $speed_qr ease-in $start_ice+($speed_ice/2)*17 fadeIn forwards, $speed_qr $func_packs $start_ice+($speed_ice/2)*17 pack3 forwards;
			}

			.shrimps__pack_4 {
				animation: $speed_qr ease-in $start_ice+($speed_ice/2)*17 fadeIn forwards, $speed_qr $func_packs $start_ice+($speed_ice/2)*17 pack4 forwards;
			}

			.shrimps__pack_5 {
				animation: $speed_qr ease-in $start_ice+($speed_ice/2)*17 fadeIn forwards, $speed_qr $func_packs $start_ice+($speed_ice/2)*17 pack5 forwards;
			}

			.shrimps__pack_6 {
				animation: $speed_qr ease-in $start_ice+($speed_ice/2)*17 fadeIn forwards, $speed_qr $func_packs $start_ice+($speed_ice/2)*17 pack6 forwards;
			}

			.shrimps__pack_7 {
				animation: $speed_qr ease-in $start_ice+($speed_ice/2)*17 fadeIn forwards, $speed_qr $func_packs $start_ice+($speed_ice/2)*17 pack7 forwards;
			}
		}
	}


	.stampTech{

		position: relative;
		margin-bottom: var(--space);

		&__options{
			box-sizing: border-box;
			display: table;
			// width: 100%;
			table-layout: fixed;

			margin-top: var(--space);

			position: relative;
			z-index: 1;

			&__item{
				display: table-cell;
				padding: 2rem 4rem;
				background-color: var(--color-light);
				width: 50%;
				box-sizing: border-box;

				position: relative;
				&:after{
					content:"";
					width: 1px;
					position: absolute;
					top: -1rem;
					bottom: -1rem;
					right: 0;
					background-color: var(--color-yellow);
				}

				&:before{
					display: none;
					content:"";
					height: 1px;
					position: absolute;
					bottom: 0;
					right: 0;
					left: 0;
					background-color: var(--color-yellow);
				}

				&:last-child{
					&:after{
						display: none;
					}
				}

				&__img{
					// height: 240px;
					position: relative;
					margin-bottom: var(--space);

					img{
						// position: absolute;
						// bottom: 0;
						// right: 0;
						max-width: 100%;
					}

					& > b{
						background-color: var(--color-yellow);
						font-size: 4rem;
						line-height: 1;
						font-weight: 700;
						padding: .5rem 1rem;

						position: absolute;
						left: -20px;
						bottom: 20px;
						z-index: 10;
						border: .5rem solid var(--color-light);
					}
				}
			}
		}

		

		

		&__product{
			position: absolute;
			z-index: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;

			&__gray, &__color{
				overflow: hidden;
				white-space: nowrap;
				display: inline-block;
				width: 50%;

				.item{
					display: inline-block;
					margin-right: 4rem;
					transform: translate3d(0, 0, 0);
					left: -1000px;
					opacity: 0;
				}
			}

			$duration_product: 5s;
			$delay_product: 1s;

			&.in-viewport{
				.stampTech__product__gray{
					.item{
						animation: moveProd $duration_product ease $delay_product infinite backwards, fadeIn 0.2s linear $delay_product forwards;
					}
				}
				.stampTech__product__color{
					.item{
						animation: moveProd $duration_product ease $duration_product/2 infinite backwards, fadeIn 0.2s linear $duration_product/2 forwards;
					}
				}
			}

			@media screen and (max-width: 1000px){
				display: none;
			}
		}

		@media screen and (max-width: 660px){
			&__options{
				display: block;

				&__item{
					display: block;
					width: 100%;

					&:after{ display: none; }
					&:before { display: block; }
				}
			}
		}
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

