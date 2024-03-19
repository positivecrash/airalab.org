<template>
  <header class="aira-flot-header">
    <div class="aira-flot-layout aira-flot-header__container">
      <g-link to="/ru/aira-flot">
        <g-image src="@/assets/images/aira-flot/logo.svg" alt="logo"/>
      </g-link>
      <button class="burger header__burger" :class="{'burger--active': isOpen}" aria-label="Открыть меню сайта" @click="isOpen = !isOpen">
        <span class="burger__line"></span>
      </button>
      <nav class="aira-flot-nav" :class="{'aira-flot-nav--active': isOpen}">
        <ul class="aira-flot-nav__list">
          <li class="aira-flot-nav__item">
            <a href="#demo" class="aira-flot-link aira-flot-nav__link">Заказать демо</a>
          </li>
          <li class="aira-flot-nav__item">
            <a href="#qa" class="aira-flot-link aira-flot-nav__link">Q&A</a>
          </li>
          <li class="aira-flot-nav__item">
            <a href="#projects" class="aira-flot-link aira-flot-nav__link">Проекты АираФлот</a>
          </li>
        </ul>
      </nav>
      <span class="aira-flot-header__sk-logo">
        <g-image  src="@/assets/images/aira-flot/logo-sk.svg" alt="sk logo"/>
      </span>
    </div>
  </header>
</template>

<script>
export default {

  data() {
    return {
      isOpen: false
    }
  }

}
</script>

<style scoped>

.aira-flot-header {
  position: relative;
  margin-bottom: calc(var(--space) * 2);
}

.aira-flot-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.aira-flot-nav__list {
  margin: 0;
  display: flex;
}

.aira-flot-nav__item:not(:last-child) {
  margin-right: calc(var(--space) * 1.2);
}

/* mobile button */

  .burger {
    display: none;
    position: relative;
    border: none;
    padding: 0;
    width: 24px;
    height: 24px;
    color: var(--color-light);
    background-color: transparent;
    transition: color 0.33s ease-in-out, background-color 0.33s ease-in-out;
    cursor: pointer;
  }

  .burger::before,
  .burger::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: currentColor;
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  .burger::before {
    top: 0;
  }

  .burger::after {
    top: calc(100% - 3px);
  }

  .burger__line {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 3px;
    background-color: currentColor;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out;
  }

  .burger--active::before {
    top: 50%;
    transform: rotate(45deg);
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  .burger--active::after {
    top: 50%;
    transform: rotate(-45deg);
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  .burger--active .burger__line {
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
  }


@media screen and (max-width: 972px) {

  .burger {
    display: block;
    order: 2;
    z-index: 100;
  }

  .burger--active {
    color: var(--aira-flot-blue);
  }

  .aira-flot-nav {
    /* order: 2; */
    position: absolute;
    width: 50%;
    height: 100vh;
    right: 0;
    top: 0px;
    background-color: var(--color-light);
    transform: translateX(100%);
    transition: transform 0.33s ease-in-out;
  }

  .aira-flot-nav::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 100%;
    top: 0;
    background-image: url("../../assets/images/aira-flot/watery-bg.png");
    background-repeat: no-repeat;
    background-position: left;
    clip-path: polygon(0% 0%, 55% 0, 100% 49%, 59% 100%, 0% 100%);
  }

  .aira-flot-nav--active {
    transform: translateX(0);
  }

  .aira-flot-nav__list {
    padding: calc(var(--space) * 0.9);
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .aira-flot-nav__link {
    font-size: calc(var(--text-size-base) * 1.2);
    color: var(--aira-flot-blue);
    text-decoration: underline;
  }

  .aira-flot-nav__item:not(:last-child) {
    margin-right: 0;
    margin-bottom: calc(var(--space) * 0.8);
  }
}

@media screen and (max-width: 660px) {
  .aira-flot-header__container {
    justify-content: unset;
  }

  .aira-flot-header__sk-logo {
    display: inline-block;
    margin-right: auto;
  }
}

@media screen and (max-width: 520px) {
  .aira-flot-nav{
    width: 100%;
    padding: 0;
  }

  .aira-flot-nav::after {
    display: none;
  }

  .aira-flot-header__container img {
    width: 80%;
  }
}

</style>