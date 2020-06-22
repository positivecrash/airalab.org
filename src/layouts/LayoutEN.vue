<template>
  
  <div class="layout">

    <ClientOnly><HeaderLang :lang="'en'"/></ClientOnly>
    <slot/>
    <FooterLang :lang="'en'"/>
    
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
