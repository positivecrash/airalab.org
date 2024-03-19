<template>


  <section class="aira-flot-banner">
    <Header/>
    <div class="aira-flot-layout">
      <div class="aira-flot-banner__text">
        <h1 class="aira-flot__title">В<em>о</em>дный др<em>о</em>н-эк<em>о</em>л<em>о</em>г</h1>
        <p class="aira-flot-text">Водный дрон-эколог от компании «Аира Флот» — беспилотное надводное судно, используемое для мониторинга водоемов как в ручном,так и в полностью автоматизированном режиме</p>
        <a href="#demo" class="aira-flot-btn aira-flot-btn--dark">Заказать демо</a>
      </div>
    </div>
    <div class="aira-flot-banner__boat">
        <g-image class="aira-flot-banner__boat--desktop" src="@/assets/images/aira-flot/boat-with-formula.png" alt="" aria-hidden="true" />
        <g-image class="aira-flot-banner__boat--mobile" src="@/assets/images/aira-flot/boat.png" alt="" aria-hidden="true" />
      </div>
      <div class="aira-flot-banner__people">
        <g-image src="@/assets/images/aira-flot/banner-bg.png" alt="" aria-hidden="true" />
      </div>

      <div class="aira-flot-layout aira-flot-banner__config">
        <div class="aira-flot-banner__config--text">Для дрона предусмотрены <b>различные варианты оснащения</b>, зависящие от целей применения и задач</div>

        <div class="configs aira-flot-pill__wrapper">
          <span v-for="config in configs" :key="config.id" class="aira-flot-pill config__item">{{ config.name }}</span>
        </div>

        <span class="aira-flot-banner__config--notice">По ТЗ заказчика перечень может быть изменен или расширен</span>
      </div>
  </section>
  


</template>

<script>
export default {

  components: {
    Header: () => import('~/components/aira-flot/Header.vue')
  },

  data() {
    return {
      configs: [
        {
          id: 0,
          name: 'Система видеоконтроля и передачи данных'
        },
        {
          id: 1,
          name: 'Система навигации'
        },
        {
          id: 2,
          name: 'Эхолот'
        },
        {
          id: 3,
          name: 'Пробоотбор'
        },
        {
          id: 4,
          name: 'Автоматизированная система контроля состояния воды'
        }
      ]
    }
  }

}
</script>

<style scoped>
.aira-flot-banner {
    position: relative;
    min-height: 1650px;
    background-color: var(--aira-flot-blue);
    background-image: url('../../assets/images/aira-flot/watery-bg-all-2.png');
    background-size: 100% 100%;
    background-position: center;
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
    color: var(--color-light)
  }

  .aira-flot-text {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: calc(var(--space) * 1.3);
  }

  .aira-flot-banner__people {
    position: absolute;
    bottom: 960px;
    right: 0;
    max-width: 620px;
  }

  .aira-flot-banner__boat {
    position: absolute;
    left: calc(100% - 878px);
    bottom: 880px;
    transform: translateX(-30%);
  }

  .aira-flot-banner__boat--mobile {
    display: none;
  }

  .aira-flot-banner__config {
    position: absolute;
    left: 50%;
    bottom: 350px;
    max-width: 1025px;
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: var(--space);
    transform: translateX(-50%);
  }

  .aira-flot-banner__config--text {
    font-size: calc(var(--text-size-base) * 1.3);
    font-style: italic;
    text-align: center;
    text-transform: uppercase;
  }

  .aira-flot-banner__config--notice {
    border-bottom: 1px solid #fff;
  }

  @media screen and (max-width: 1595px) {
    .aira-flot-banner__boat--desktop {
      display: none;
    }  
    
    .aira-flot-banner__boat--mobile {
      display: block;
    }

    .aira-flot-banner__boat {
      max-width: 450px;
      left: calc(100% - 900px);
      bottom: 822px;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 1330px) {

    .aira-flot-banner {
      background-size: cover;
    }

    .aira-flot-banner__people {
      max-width: 420px;
    }

    .aira-flot-banner__boat {
      max-width: 290px;
      left: calc(100% - 624px);
      bottom: 864px;
    }
  }

  @media screen and (max-width: 910px) {
    .aira-flot-banner__config {
      bottom: 280px;
      text-align: center;
    }
  }

  @media screen and (max-width: 880px) {

    .aira-flot-banner__people {
      display: none;
    }

    .aira-flot-banner__boat {
      max-width: 290px;
      left: unset;
      right: 0;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 610px) {
    

    .aira-flot-banner__boat {
      display: none;
    }

    .aira-flot-banner__config {
      bottom: 180px;
    }

    .aira-flot-banner__config--text {
      font-size: calc(var(--text-size-base) * 1.1);
    }

    .aira-flot-banner__config--notice {
      border: none;
    }
  }

  @media screen and (max-width: 440px) {
    
    .aira-flot-banner__text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .aira-flot__title {
      font-size: calc(var(--text-size-title) * 1.2);
    }


    .aira-flot-banner__config {
      bottom: 80px;
    }
  }

</style>