<template>
  <Layout>
    <div class="page-inside">
		<div class="w-text">
		    <h1>Контакты</h1>
		    <p><b>АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР РОБОТОТЕХНИКИ "АИРАЛАБ РУС"</b></p>
		    <p><b>ОКВЭД: </b><br/>72.19 Научные исследования и разработки в области естественных и технических наук</p>
		    <p><b>ИНН: </b><br/>6321439834</p>
		    <p><b>E-mail: </b><br/>{{$static.metadata.email}}</p>
		    <p><b>Телефон: </b><br/>+79278944911</p>
	  	</div>
	</div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    email
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Контакты'
  }
}
</script>
