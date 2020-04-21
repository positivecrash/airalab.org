<template>
  <Layout>
    <div class="page-inside service">

    	<div class="w-text">
	        <h1>Сервис “Публичный блокчейн штамп” для данных на вашем производстве</h1>
       	</div>

		<div class="shrimps" v-view.once>
			
			<!-- <div class="shrimps__pack"><ShrimpPack/></div> -->

			<g-image class="shrimps__pack" alt="" src="~/assets/images/shrimp-pack.svg"/>

			<div class="shrimps__ice shrimps__ice_1"><ShrimpIce/></div>
			<div class="shrimps__ice shrimps__ice_2"><ShrimpIce/></div>
			<div class="shrimps__ice shrimps__ice_3"><ShrimpIce/></div>
			<div class="shrimps__ice shrimps__ice_4"><ShrimpIce/></div>
			<div class="shrimps__ice shrimps__ice_5"><ShrimpIce/></div>
			<div class="shrimps__ice shrimps__ice_6"><ShrimpIce/></div>
			<div class="shrimps__ice shrimps__ice_7"><ShrimpIce/></div>
			<div class="shrimps__ice shrimps__ice_8"><ShrimpIce/></div>

			<div class="shrimps__right">
				<div class="shrimps__right__item shrimps__right__item_1"><Shrimp/></div>
				<div class="shrimps__right__item shrimps__right__item_2"><Shrimp/></div>
				<div class="shrimps__right__item shrimps__right__item_3"><Shrimp/></div>
				<div class="shrimps__right__item shrimps__right__item_4"><Shrimp/></div>
				<div class="shrimps__right__item shrimps__right__item_5"><Shrimp/></div>
			</div>

			<div class="shrimps__left">
				<div class="shrimps__left__item shrimps__left__item_1"><Shrimp/></div>
				<div class="shrimps__left__item shrimps__left__item_2"><Shrimp/></div>
				<div class="shrimps__left__item shrimps__left__item_3"><Shrimp/></div>
				<div class="shrimps__left__item shrimps__left__item_4"><Shrimp/></div>
				<div class="shrimps__left__item shrimps__left__item_5"><Shrimp/></div>
			</div>

			<div class="shrimps__qr"><ShrimpQR/></div>
			
			<div class="shrimps__pack_2"><ShrimpPack2/></div>
			<div class="shrimps__pack_3"><ShrimpPack3/></div>
			<div class="shrimps__pack_4"><ShrimpPack2/></div>

			<div class="shrimps__pack_5"><ShrimpPack3/></div>
			<div class="shrimps__pack_6"><ShrimpPack2/></div>
			<div class="shrimps__pack_7"><ShrimpPack3/></div>


			<!-- <g-image class="shrimps__pack" alt="" src="~/assets/images/shrimp-pack.svg"/>
			<g-image class="shrimps__ice shrimps__ice_1" alt="" src="~/assets/images/shrimp-ice.svg"/>
			<g-image class="shrimps__ice shrimps__ice_2" alt="" src="~/assets/images/shrimp-ice.svg"/>
			<g-image class="shrimps__ice shrimps__ice_3" alt="" src="~/assets/images/shrimp-ice.svg"/>
			<g-image class="shrimps__ice shrimps__ice_4" alt="" src="~/assets/images/shrimp-ice.svg"/>
			<g-image class="shrimps__ice shrimps__ice_5" alt="" src="~/assets/images/shrimp-ice.svg"/>
			<g-image class="shrimps__ice shrimps__ice_6" alt="" src="~/assets/images/shrimp-ice.svg"/>
			<g-image class="shrimps__ice shrimps__ice_7" alt="" src="~/assets/images/shrimp-ice.svg"/>
			<g-image class="shrimps__ice shrimps__ice_8" alt="" src="~/assets/images/shrimp-ice.svg"/>
			<div class="shrimps__right">
				<g-image class="shrimps__right__item shrimps__right__item_1" alt="" src="~/assets/images/shrimp.svg"/>
				<g-image class="shrimps__right__item shrimps__right__item_2" alt="" src="~/assets/images/shrimp.svg"/>
				<g-image class="shrimps__right__item shrimps__right__item_3" alt="" src="~/assets/images/shrimp.svg"/>
				<g-image class="shrimps__right__item shrimps__right__item_4" alt="" src="~/assets/images/shrimp.svg"/>
				<g-image class="shrimps__right__item shrimps__right__item_5" alt="" src="~/assets/images/shrimp.svg"/>
			</div>
			<div class="shrimps__left">
				<g-image class="shrimps__left__item shrimps__left__item_1" alt="" src="~/assets/images/shrimp.svg"/>
				<g-image class="shrimps__left__item shrimps__left__item_2" alt="" src="~/assets/images/shrimp.svg"/>
				<g-image class="shrimps__left__item shrimps__left__item_3" alt="" src="~/assets/images/shrimp.svg"/>
				<g-image class="shrimps__left__item shrimps__left__item_4" alt="" src="~/assets/images/shrimp.svg"/>
				<g-image class="shrimps__left__item shrimps__left__item_5" alt="" src="~/assets/images/shrimp.svg"/>
			</div>
			<g-image class="shrimps__qr" alt="" src="~/assets/images/shrimp-qr.svg"/>
			<g-image class="shrimps__pack_2" alt="" src="~/assets/images/shrimp-pack-2.svg"/>
			<g-image class="shrimps__pack_3" alt="" src="~/assets/images/shrimp-pack-3.svg"/>
			<g-image class="shrimps__pack_4" alt="" src="~/assets/images/shrimp-pack-2.svg"/>

			<g-image class="shrimps__pack_5" alt="" src="~/assets/images/shrimp-pack-3.svg"/>
			<g-image class="shrimps__pack_6" alt="" src="~/assets/images/shrimp-pack-2.svg"/>
			<g-image class="shrimps__pack_7" alt="" src="~/assets/images/shrimp-pack-3.svg"/> -->

		</div>
		
		<div class="w-text t-align-center">
	        <p>Воспользуйтесь сервисом от АНО ИЦР Аиралаб Рус “Блокчейн штамп” : выпускайте web3 цифровые сертификаты и паспорта продукции и повышайте доверие к произведенной вами продукции или оказанным услугам.</p>
	        <g-link :to="'mailto:'+$static.metadata.email" target="_blank" class="btn-red">Напишите нам</g-link>
      	</div>


      	<section class="section section-gray">
			<div class="w-text">
				<h2>Как это работает</h2>
				<p class="t-align-center">У вас есть 2 варианта выпуска цифрового блокчейн сертификата для вашей продукции или услуги:</p>

				<div class="stampTech">
					<div class="stampTech__option">
						<div class="stampTech__option__img">
							<b>1</b>
							<StampTech1/>
						</div>
						<p><strong>Выпуск сертификата оператором вручную в заранее подготовленном децентрализованном приложении</strong></p>
					</div>
					<div class="stampTech__option">
						<div class="stampTech__option__img">
							<b>2</b>
							<StampTech2/>
						</div>
						<p><strong>Выпуск сертификата в фоновом режиме автоматически, на основе данных, получаемых от настроенных IoT устройств</strong></p>
					</div>
				</div>
			</div>
		</section>

	</div>


  </Layout>
</template>


<style lang="scss">
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
		}

		&__pack_2, &__pack_3, &__pack_4, &__pack_5, &__pack_6, &__pack_7{
			position: absolute;
			left: 50%;
			opacity: 0;
			top: 0;
		}

		&__ice{
			position: absolute;
			z-index: 9;
			opacity: 0;
		}

		&__ice_1{
			top: 80px;
			left: calc(50% + 10px);
		}

		&__ice_2{
			transform: scale(.75) rotate(40deg);
			top: 120px;
			left: calc(50% - 10px);
		}

		&__ice_3{
			transform: scale(1.2) rotate(-90deg);
			top: 125px;
			left: calc(50% - 60px);
		}

		&__ice_4{
			transform: scale(.65) rotate(-40deg);
			top: 50px;
			left: calc(50% - 70px);
		}

		&__ice_5{
			transform: scale(.7) rotate(10deg);
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
			transform: scale(.8) rotate(30deg);
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
		}

		&.view-in{
			.shrimps__pack{ animation: 1s cubic-bezier(.02,.52,.69,-0.3) 0.6s scaleIn forwards; }
			.shrimps__ice_1{ animation: $speed_ice ease-in $start_ice fadeInTransp forwards; }
			.shrimps__ice_2{ animation: $speed_ice ease-in $start_ice+$speed_ice/2 fadeInTransp forwards; }
			.shrimps__ice_3{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*2 fadeInTransp forwards; }
			.shrimps__ice_4{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*3 fadeInTransp forwards; }
			.shrimps__ice_5{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*4 fadeInTransp forwards; }
			.shrimps__ice_6{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*5 fadeInTransp forwards; }
			.shrimps__ice_7{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*6 fadeInTransp forwards; }
			.shrimps__ice_8{ animation: $speed_ice ease-in $start_ice+($speed_ice/2)*7 fadeInTransp forwards; }

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
		box-sizing: border-box;
		display: table;
		width: 100%;
		table-layout: fixed;

		margin: 2rem 0;

		&__option{
			display: table-cell;
			padding: 2rem 4rem;
			background-color: var(--color-light);

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
				height: 240px;
				position: relative;
				margin-bottom: var(--space);

				svg{
					position: absolute;
					bottom: 0;
					right: 0;
					max-height: 100%;
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


	@media screen and (max-width: 728px){
		.stampTech{
			display: block;

			&__option{
				display: block;

				&:after{ display: none; }
				&:before { display: block; }

				// &__img{
				// 	// svg{
				// 	// 	right: auto;
				// 	// 	left: 7rem;
				// 	// }
				// }
			}
		}
	}


	@media screen and (min-width: 440px) and (max-width: 728px){
		.stampTech__option__img{
			svg{
				left: 7rem;
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

import ShrimpPack from '@/assets/images/shrimp-pack.svg'
import ShrimpPack2 from '@/assets/images/shrimp-pack-2.svg'
import ShrimpPack3 from '@/assets/images/shrimp-pack-3.svg'
import ShrimpIce from '@/assets/images/shrimp-ice.svg'
import Shrimp from '@/assets/images/shrimp.svg'
import ShrimpQR from '@/assets/images/shrimp-qr.svg'

import StampTech1 from '@/assets/images/stampTech-1.svg'
import StampTech2 from '@/assets/images/stampTech-2.svg'

export default {

	components: {
      ShrimpPack,
      ShrimpPack2,
      ShrimpPack3,
      ShrimpIce,
      Shrimp,
      ShrimpQR,
      StampTech1,
      StampTech2
    },

  	metaInfo: {
    	title: 'Сервис “Публичный блокчейн штамп” для данных на вашем производстве'
  	}
}
</script>

