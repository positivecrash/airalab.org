<template>
  
  <div class="layout">

    <ClientOnly><HeaderLang :lang="'ru'"/></ClientOnly>
    <slot/>
    <FooterLang :lang="'ru'"/>
    
  </div>
  
</template>


<script>

export default {

  components: {
    HeaderLang: () => import('~/components/Header.vue'),
    FooterLang: () => import('~/components/Footer.vue')
  }

}

</script>
