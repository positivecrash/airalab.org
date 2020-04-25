<template>
  <Layout>
    <div class="page-inside donation">

    	<div class="w-text">
	        <div class="texthighlight_yellow t-align-center">
	        	<h1>Спасибо, что поддерживаете нас!</h1>
	        </div>
       	</div>
       	
   		<g-image class="donation__banner" alt="" src="~/assets/images/banner-website-donation.jpg"/>

       	<div class="w-text t-paragraph-hyphened t-align-center">
       		<p>Ваша поддержка для нас не только материальное обеспечение на будущее, но ещё и большой мотиватор развивать проекты с большей энергией и энтузиазмом.</p>
   			<p>О ходе нашей работы мы публикуем <g-link :to="$static.metadata.bloglink" target="_blank">новости в блоге</g-link>. Так же вы можете <g-link :to="$static.metadata.subscribelink" target="_blank">подписаться на рассылку</g-link>.</p>
       	</div>
    
	</div>
  </Layout>
</template>


<style lang="scss">
	.donation{
		&__banner{
			display: block;
			width: 900px;
			max-width: 100%;
			margin: calc(var(--space)*2) auto;
		}

		.sec-bordered{
			margin-top: calc(var(--space)*2);
		}

		form{
			max-width: 300px;
			margin: 0 auto;
		}

		.inp-paysum
			{
				position: relative;

				input{
					position: relative;
					z-index: 0;
					text-align: center;
				}
				&:after{
					content:'₽';
					position: absolute;
					z-index: 1;
					right: 22px;
					top: 13px;
					font-weight: 500;
				}
			}


		.i-payment-methods{
			display: inline-block;
			max-width: 100%;
			margin-top: var(--space);
		}
	}
</style>


<static-query>
query {
  metadata {
    bloglink,
    subscribelink
  }
}
</static-query>


<script>
export default {
  metaInfo: {
    title: 'Спасибо, что поддерживаете нас!'
  }
}
</script>

