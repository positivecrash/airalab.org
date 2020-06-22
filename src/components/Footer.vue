<template>
  
  <footer role="contentinfo">
      <div class="w-base">
        <div class="footer-row d-t w-full">

          <div class="d-t_cell align-v-m">
            <tenplate v-if=" lang == 'ru' ">
              <g-link :to="$static.metadata.subscribeRU" target="_blank">Рассылка важных новостей</g-link>
            </tenplate>

            <tenplate v-if=" lang == 'en' ">
              <g-link :to="$static.metadata.subscribeEN" target="_blank">Newsletter subscribe</g-link>
            </tenplate>
          </div>

          <div class="d-t_cell align-v-m t-align-right">{{string1}} <g-link :to="'mailto:'+$static.metadata.email" v-html="$static.metadata.email"/></div>
        </div>
      </div>
  </footer>

</template>


<style lang="scss">

  footer[role='contentinfo']
    {
      background-color: #2c4c4b;
      color: var(--color-light);

      a {
        color: var(--color-orange);
        font-weight: 400;

        &, &:hover, &:focus, &:visited{
          text-decoration: none;
          text-decoration: none !important;
        }
      }

      padding: 20px 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;


      .form-inline
        {
          max-width: 412px;
        }

       @media screen and (max-width: 630px)
        {

          .footer-row
            {
              .d-t_cell
                {
                  display: block;
                  text-align: center;
                  padding-bottom: var(--space);
                }
            }
        }
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

  data(){
    return {
      string1: 'Пишите на:'
    }
  },

  created: function() {
    if ( this.lang === 'en' ){
      this.string1 = 'Write us:'
    }
  }
}

</script>
