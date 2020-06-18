<template></template>

<script>
  export default {
    methods: {
      // geturl: function(lang) {

      //     if ( lang ){
      //       localStorage.lang = lang;
      //     }

      //     if ( !localStorage.lang ){
      //       localStorage.lang = 'ru';
      //     }

      //     return '/' + localStorage.lang + window.location.pathname;
      //   },

      redirect() {
        document.location.href = '/' + localStorage.lang + window.location.pathname;
      }
    },

    mounted() {

      if( !localStorage.lang ){
        localStorage.lang = window.navigator.language.split("-")[0]
      }

      this.redirect();
    }

  }
</script>