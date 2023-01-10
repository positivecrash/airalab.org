<template>
  <section class="section" :class="specialClass">
    <div class="donation w-text" :class="imgClass">
      <g-link :to="donationLink" class="btn-red">{{donationButton}}</g-link>
    </div>
  </section>
</template>

<script>
export default {

  props: {
    donationLink: { type: String, default: '' },
    donationButton: { type: String, default: '' },
    imgClass: { type: String, default: '' },
    specialClass: { type: String, default: '' },
  }

}
</script>

<style scoped>
  .donation {
    display: flex;
    min-height: 571px;
    height: 100%;
    justify-content: flex-start;
    justify-content: center;
    background-image: url('~@/assets/images/support-img.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom 50px center;
    padding-top: 58px;
  }



  .donation a {
    align-self: flex-start;
    padding: calc(var(--space) / 3) calc(var(--space) * 2);
  }

  @media screen and (max-width: 960px) {

    .donation.diff-img {
      min-height: 616px;
      background-position: bottom 82px center;
    }

    .air-monitoring-ru .donation {
      min-height: 600px;
      padding-top: 0;
      background-position: bottom 77px center;
    }
    
  }


  @media screen and (max-width: 750px) {

    .donation.diff-img {
      min-height: 571px;
      background-position: bottom 75px center;
    }

  }

  @media screen and (max-width: 540px) {
    .donation {
      min-height: 406px;
    }

    .air-monitoring-ru .donation {
      min-height: 428px;
      background-position: bottom 106px center;
    }
    
  }


  @media screen and (max-width: 512px) {

    .donation.diff-img {
      min-height: 470px;
      background-position: bottom 105px center;
      padding-top: 0;
    }
    
  }

  @media screen and (max-width: 400px) {

    .air-monitoring-en .donation {
      min-height: 344px;
      padding-top: 0;
      background-position: bottom 77px center;
    }

  }

  @media screen and (max-width: 350px) {
    .donation {
      min-height: 297px;
      padding-top: 0;
      background-position: bottom 78px center;
    }

    .donation.diff-img {
      min-height: 372px;
      background-position: bottom 107px center;
    }

    .air-monitoring-ru .donation {
      min-height: 381px;
      background-position: bottom 133px center;
    }
    
  }
</style>