<template>

  <header class="header" role='banner'>

    <div class="w-paddings">
      <div class="d-t w-full">
        <div class="d-t_cell align-v-m">

          <g-link :to="'/' + lang + '/'" class="header__logo">
            <g-image v-if="lang == 'en'" alt="" src="~/assets/images/logo-airalabrus.png" quality="100"/>
            <g-image v-if="lang == 'ru'" alt="" src="~/assets/images/logo-airalabrus-ru.png" quality="100"/>
          </g-link>
        </div>

        <div class="d-t_cell align-v-m t-align-right">
          <a id="header-nav-toggler" href="#" @click.prevent="MobileNav" :class="{active: isActive}">
            <g-image class="sprite-basic-hamburger" :alt="string1" src="~/assets/images/hamburger.svg"/>
            <g-image class="sprite-basic-hamburger-close" alt="string2" src="~/assets/images/hamburger-close.svg"/>
          </a>

          <ul class="header-nav-desktop" :class="{active: isActive}" v-if="menuEN || menuRU">
            <template v-if="lang == 'en' && menuEN">
              <li 
                :class="item.class" 
                v-for="(item, key) in menuEN" 
                v-bind:key="key"
              >
                <g-link 
                  :to="item.link"
                  :class="{active: 
                    item.title === 'Our research' && $route.path.includes('air-monitoring') ||
                    item.title === 'Our research' && $route.path.includes('water-monitoring') ||
                    item.title === 'Our research' && $route.path.includes('service-blockchain-stamp')
                  }"
                >
                  {{item.title}}
                </g-link></li>
            </template>

            <template v-if="lang == 'ru' && menuRU">
                <li 
                  :class="item.class" 
                  v-for="(item, key) in menuRU" 
                  v-bind:key="key"
                >
                  <g-link 
                    :to="item.link"
                    :class="{active: 
                      item.title === 'Разработки' && $route.path.includes('air-monitoring') ||
                      item.title === 'Разработки' && $route.path.includes('water-monitoring') ||
                      item.title === 'Разработки' && $route.path.includes('service-blockchain-stamp')
                    }"
                  >
                    {{item.title}}
                  </g-link>
              </li>
            </template>

            <li v-if="langs" class="langTog">
              <a href="javascript:;" class="langTog__cur"><span class="langTog__cur__text">{{ lang }}</span> <span class="langTog__cur__arrow">&#9207;</span></a>

              <ul class="langTog__menu">
                <template v-for="(item, key) in langs">
                  <li v-if="item.lang != lang" v-bind:key="key"><a :href="geturl(item.lang)">{{ item.lang }}</a></li>
                </template>
              </ul>
            </li>
          </ul>


        </div>
      </div>
    </div>
  </header>

</template>


<style scoped>

  .header{

    background-color: var(--color-darkish);
    color: var(--color-light);
    font-size: calc( var(--text-size-base) * 0.9 );

    padding: 20px 0;
    position: relative;
    z-index: 10;
  }

  .header a, .header a:hover, .header a:focus, .header a:visited {
    text-decoration: none;
    text-decoration: none !important;
  }

  .header a {
    color: var(--color-light);
  }

  .header__logo {
    display: block;
    width: 210px;
  }

  .header__logo img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .header-nav-desktop {
    margin-left: 0;
    margin-bottom: 0;
    list-style: none;
    text-align: right;
  }

  .header-nav-desktop li {
    display: inline-block;
    margin-left: 30px;
    margin-bottom: 0;
    font-weight: 500;
  }

  .header-nav-desktop li:first-child { margin-left: 0;}

  .header-nav-desktop li.border-right {
    padding-right: 30px;
    border-right: 1px solid #ffffff5c;
  }

  .header-nav-desktop li a.active, .header-nav-desktop li a.active:hover {
    color: var(--color-orange);
    /* cursor: default; */
  }

  #header-nav-toggler {
    display: none;
  }

  .langTog {
    text-transform: uppercase;
    position: relative;
  }

  .langTog:hover .langTog__cur {
    background-color: var(--color-light);
    color: var(--color-blue);
  }

  .langTog:hover .langTog__menu {
    opacity: 1;
  }

  .langTog__cur {
    /* border: 1px solid var(--color-light); */
    padding: 0.2rem 0.4rem;
  }

  .langTog__cur__text {
    vertical-align: middle;
  }

  .langTog__cur__arrow {
    vertical-align: middle;
    line-height: 1;
    margin-left: 0.2rem;
  }

  .langTog__menu {
    color: var(--color-dark);
    transition: 0.2s ease opacity;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin-left: 0;
    text-align: left;
    opacity: 0;
  }

  .langTog__menu a { 
    color: var(--color-dark);
    display: block;
    background-color: var(--color-light);
    padding: 0.2rem 0.4rem;
  }

  .langTog__menu li {
    display: block;
    margin-left: 0;
    padding-top: 0.2rem;
  }

  .langTog__menu li:first-child{
    padding-top: 0.8rem;
  }

  @media screen and (max-width: 980px) {
    .header-nav-desktop {
      opacity: 0;
      position: absolute;
      right: 0;
      top: 80px;
      background-color: var(--color-dark);
      padding: 10px 0;
    }

    .header-nav-desktop.active
    {
      opacity: 0;
      animation: 0.3s fadeIn ease-in forwards;
    }

    .header-nav-desktop li {
      display: block;
      margin-left: 0;
      margin-bottom: var(--space);
      text-align: right;
      padding: calc( var(--paddings)/2 ) var(--paddings) 0;
    }

    #header-nav-toggler {
      display: block;
    }

    #header-nav-toggler .sprite-basic-hamburger-close { display: none; }
    #header-nav-toggler.active .sprite-basic-hamburger {display: none; }
    #header-nav-toggler.active .sprite-basic-hamburger-close {display: inline-block; }

    .langTog__menu li {
      padding-top: 0;
      margin-bottom: 0;
    }
  }

</style>


<script>

import menuEN from '@/data/menu-en.yaml'
import menuRU from '@/data/menu-ru.yaml'
import langs from '@/data/langs.yaml'

import { geturl } from './mixins/geturl'

// components: {
//     Lang: () => import('~/components/Lang.vue')
// }

export default {

	props: {
      lang: { type: String, default: 'ru' }
  },

  mixins: [geturl],

  data(){
    return {
      isActive: false,
      string1: 'открыть меню',
      string2: 'скрыть меню',
      menuEN,
      menuRU,
      langs
    }
  },

  created: function() {
    if ( this.lang === 'en' ){
      this.string1 = 'open'
      this.string2 = 'close'
    }
  },

  methods: {
    MobileNav: function() {
      this.isActive = !this.isActive;
    }
  }

}

</script>
