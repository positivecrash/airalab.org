<template>
  
  <section class="aira-flot-banner">
      <Header/>
      <div class="aira-flot-layout">
        <div class="aira-flot-banner__text">
          <h1 class="aira-flot__title">В<em>о</em>дный др<em>о</em>н-эк<em>о</em>л<em>о</em>г</h1>
          <p class="aira-flot-text">Водный дрон-эколог от компании «Аира Флот» — беспилотное надводное судно, используемое для мониторинга водоемов как в ручном,так и в полностью автоматизированном режиме</p>
          <button class="aira-flot-btn aira-flot-btn--transparent">Узнать больше</button>
          <button class="aira-flot-btn aira-flot-btn--dark">Заказать демо</button>
        </div>
      </div>
      <div class="aira-flot-banner__boat">
          <g-image src="@/assets/images/aira-flot/boat.png" alt="" aria-hidden="true" />
        </div>
        <div class="aira-flot-banner__people">
          <g-image src="@/assets/images/aira-flot/banner-bg.png" alt="" aria-hidden="true" />
        </div>
    </section>

</template>

<script>
export default {

  components: {
    Header: () => import('~/components/aira-flot/Header.vue')
  },

}
</script>

<style scoped>
.aira-flot-banner {
    position: relative;
    min-height: 860px;
    background-color: var(--aira-flot-blue);
    background-image: url("../../assets/images/aira-flot/watery-bg.png");
    background-size: 100%;
    background-position: center 620px;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .aira-flot-banner .aira-flot-btn--transparent {
    margin-right: var(--space);
  }

  .aira-flot-banner__text {
    max-width: 710px;
  }

  .aira-flot__title {
    font-size: calc(var(--text-size-title) * 2 );
    margin: 0;
    margin-bottom: calc(var(--space) * 0.9);
    text-align: left;
    text-transform: uppercase;
  }

  .aira-flot-text {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: calc(var(--space) * 1.3);
  }

  .aira-flot-banner__people {
    position: absolute;
    bottom: 155px;
    right: 0;
    max-width: 620px;
  }

  .aira-flot-banner__boat {
    max-width: 450px;
    position: absolute;
    left: calc(100% - 900px);
    bottom: 30px;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 1330px) {
    .aira-flot-banner__people {
      bottom: 175px;
      max-width: 420px;
    }

    .aira-flot-banner__boat {
      max-width: 290px;
      left: calc(100% - 624px);
      bottom: 88px;
    }
  }

  @media screen and (max-width: 880px) {
    .aira-flot-banner {
      min-height: 780px;
    }

    .aira-flot-banner__people {
      display: none;
    }

    .aira-flot-banner__boat {
      max-width: 290px;
      left: unset;
      right: 0;
      bottom: 101px;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 610px) {
    
    
    .aira-flot-banner {
      background-position: center 656px;
    }

    .aira-flot-banner__boat {
      display: none;
    }
  }

  @media screen and (max-width: 440px) {

    .aira-flot-banner {
      min-height: 686px;
      background-position: center 620px;
    }
    
    .aira-flot-banner__text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .aira-flot__title {
      font-size: calc(var(--text-size-title) * 1.2);
    }

    .aira-flot-banner .aira-flot-btn--transparent {
      margin-right: 0;
      margin-bottom: var(--space);
    }
  }

</style>