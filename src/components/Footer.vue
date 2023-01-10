<template>
  
  <footer role="contentinfo">
      <div class="w-base">
        <div class="footer-row w-full">

          <div>
            <template v-if=" lang == 'ru' ">
             <p>Автономная некоммерческая организация «Исследовательский центр роботехники Аиралаб Рус»</p>
            </template>

            <template v-if=" lang == 'en' ">
              <p>NPO robotics research centre AIRALAB RUS</p>
            </template>
          </div>

          <div > <g-link :to="'mailto:'+$static.metadata.email" v-html="$static.metadata.email"/></div>
        </div>
      </div>
  </footer>

</template>


<style scoped>

  footer[role='contentinfo'] {
    background-color: #454545;
    bottom: 0;
    color: var(--color-light);
    padding: 20px 0;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
  }

  footer[role='contentinfo'] a {
    color: var(--color-orange);
    font-weight: 400;
  }

  footer[role='contentinfo'] a, 
  footer[role='contentinfo'] a:hover, 
  footer[role='contentinfo'] a:focus,
  footer[role='contentinfo'] a:visited {
    text-decoration: none;
    text-decoration: none !important;
  }

  .form-inline { 
    max-width: 412px;
  }

  footer[role='contentinfo'] .footer-row  {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

</style>

<static-query>
query {
  metadata {
    email,
    subscribeRU,
    subscribeEN
  }
}
</static-query>


<script>

export default {

	props: {
      lang: { type: String, default: 'ru' }
  },
}

</script>
