<template>

  <div class="page-inside donation">

      <div class="w-text">
          <div class="texthighlight_yellow t-align-center">
            <h1>{{ title }}</h1>
          </div>
        </div>
        
      <g-image class="donation__banner" alt="" src="~/assets/images/banner-website-donation.jpg"/>

      <div class="w-text t-paragraph-hyphened t-align-center" v-html="text" />
  
  </div>

</template>


<style sxoped>

  .donation__banner {
    display: block;
    width: 900px;
    max-width: 100%;
    margin: calc(var(--space)*2) auto;
  }

  .donation .sec-bordered {
    margin-top: calc(var(--space)*2);
  }

  .donation form {
    max-width: 300px;
    margin: 0 auto;
  }

  .donation .inp-paysum { position: relative; }
  .donation input {
    position: relative;
    z-index: 0;
    text-align: center;
  }

  .donation .inp-paysum:after {
    content:'₽';
    position: absolute;
    z-index: 1;
    right: 22px;
    top: 13px;
    font-weight: 500;
  }

  .i-payment-methods{
    display: inline-block;
    max-width: 100%;
    margin-top: var(--space);
  }
</style>

<script>
export default {

  props: {
      title: { type: String, default: '' },
      text: { type: String, default: '' }
  }
}
</script>