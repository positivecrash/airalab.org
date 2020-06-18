<template>
  
  <div class="layout">

    <HeaderLang :lang="'ru'"/>
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
