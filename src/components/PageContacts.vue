<template>

    <div class="page-inside">
    <div class="w-text">
        <h1>{{ title }}</h1>
        <p><b>{{ organization }}</b></p>
        <p v-if="lang == 'ru'"><b>ОКВЭД: </b><br/>72.19 Научные исследования и разработки в области естественных и технических наук</p>
        <p v-if="lang == 'ru'"><b>ИНН: </b><br/>6321439834</p>
        <p><b>E-mail: </b><br/>{{$static.metadata.email}}</p>
        <p v-if="phoneTitle"><b>{{ phoneTitle }}: </b><br/>+79278944911</p>
      </div>
  </div>
  
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
  props: {
      title: { type: String, default: '' },
      organization: { type: String, default: '' },
      phoneTitle: { type: String, default: '' },
      lang: { type: String, default: '' }
  }
}
</script>
