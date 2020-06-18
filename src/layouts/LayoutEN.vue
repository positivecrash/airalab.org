<template>
  
  <div class="layout">

    <HeaderLang :lang="'en'"/>
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
