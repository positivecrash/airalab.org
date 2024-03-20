<template>
  <footer class="aira-flot-footer">
    <div class="aira-flot-footer__top" id="demo">
      <div class="aira-flot-layout">
        <h3 class="aira-flot-footer__title aira-flot__title">
          <b>Закажи демо</b> в&nbsp;своем городе
        </h3>
        <div class="aira-flot-footer__contacts">
          <span>Иван Петров, директор ООО «Аира Флот»</span>
          <a href="tel:+79171569724">+7(917)156-97-24</a>
          <a href="mailto:ip@airalab.org">ip@airalab.org</a>
        </div>
      </div>
      <div class="aira-flot-footer__boat">
        <g-image src="@/assets/images/aira-flot/boat.png" alt="" aria-hidden="true" />
      </div>
    </div>
    <div class="aira-flot-footer__dark aira-flot-footer__qa" id="qa">
      <div class="aira-flot-layout">
        <h3 class="aira-flot-footer__title aira-flot__title">Q&A</h3>
        <Wrapper/>
      </div>
    </div>
    <div class="aira-flot-footer__dark aira-flot-footer__other" id="projects">
      <div class="aira-flot-layout">
        <h3 class="aira-flot-footer__title aira-flot__title">
          <b>Другие проекты&nbsp;от </b> АираФлот
        </h3>
        <g-link to="/ru/services/" class="aira-flot-btn aira-flot-btn--dark">Узнать о проектах</g-link>
        <g-link to="/ru/aira-flot/" class="aira-flot-footer__airaflot-logo">
          <g-image src="@/assets/images/aira-flot/logo.svg" alt="aira flot logo"/>
        </g-link>
        <span class="aira-flot-footer__sk-logo">
          <g-image  src="@/assets/images/aira-flot/logo-sk.svg" alt="sk logo"/>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

  components: {
    Wrapper: () => import('~/components/aira-flot/QAWrapper.vue')
  }

}
</script>

<style scoped>

.aira-flot-footer__top {
  position: relative;
  min-height: 660px;
  padding-top: calc(var(--space) * 3);
  background-image: url('../../assets/images/aira-flot/watery-bg.png');
  background-size: 100%;
  background-position: center 450px;
  background-repeat: no-repeat;
  background-color: var(--aira-flot-blue);
}

.aira-flot-footer__title {
  max-width: 484px;
  color: var(--color-light);
  font-size: var(--text-size-title);

}

.aira-flot-footer__title b {
  font-style: italic;
}

.aira-flot-footer__contacts {
  display: flex;
  flex-direction: column;
  font-weight: 400;
}

.aira-flot-footer__contacts a {
  color: var(--color-light);
  text-decoration: none;
}

.aira-flot-footer__contacts a:hover {
  color: var(--aira-flot-darkest-blue);
}

.aira-flot-footer__boat {
  position: absolute;
  max-width: 466px;
  bottom: 96px;
  right: 200px;
}

.aira-flot-footer__dark {
  background-color: #00347C;
}

.aira-flot-footer__qa .aira-flot-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: calc(var(--space) * 2)
}

.aira-flot-footer__other {
  position: relative;
  padding-top: calc(var(--space) * 4);
  min-height: 710px;
  background-image: url('../../assets/images/aira-flot/footer-bg.png');
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
}

.aira-flot-footer__airaflot-logo {
  position: absolute;
  bottom: 0px;
  left: 0;
}

.aira-flot-footer__sk-logo {
  position: absolute;
  bottom: 0px;
  right: 0;
}


@media screen and (max-width: 1042px) {
  .aira-flot-footer__boat {
    max-width: 320px;
    bottom: 125px;
  }
}

@media screen and (max-width: 920px) {
  .aira-flot-footer__qa .aira-flot-layout {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media screen and (max-width: 860px) {
  .aira-flot-footer__top {
    min-height: 586px;
    background-position: bottom;
    background-size: contain;
  }

  .aira-flot-footer__other {
    min-height: 500px;
  }
}

@media screen and (max-width: 620px) {

  .aira-flot-footer__top {
    background-size: 300%;
    background-position: center 428px;
  }

  .aira-flot-footer__boat {
    right: 20px;
    bottom: 86px;
  }

  .aira-flot-footer__other {
    background-size: cover;
  }
}

@media screen and (max-width: 410px) {
  .aira-flot-footer__boat {
    max-width: 258px;
    bottom: 70px;
    z-index: 0;
  }

  .aira-flot-footer__contacts {
    position: relative;
    z-index: 5;
  }

  .aira-flot-footer__sk-logo {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: unset;
  }
}


</style>