<template>

  <header class="header" role='banner'>

    <div class="w-base">
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
            <template v-if="lang == 'en'">
                <template v-if="menuEN" v-for="(item, key) in menuEN">

                  <li><g-link :to="item.link">{{item.title}}</g-link></li>
                </template>
            </template>

            <template v-if="lang == 'ru'">
                <template v-if="menuRU" v-for="(item, key) in menuRU">

                  <li><g-link :to="item.link">{{item.title}}</g-link></li>
                </template>
            </template>

            <li v-if="langs" class="langTog">
              <a href="javascript:;" class="langTog__cur"><span class="langTog__cur__text">{{ lang }}</span> <span class="langTog__cur__arrow">&#8964;</span></a>

              <ul class="langTog__menu">
                <template v-for="(item, key) in langs">
                  <li v-if="item.lang != lang"><a :href="geturl(item.lang)">{{ item.lang }}</a></li>
                </template>
              </ul>
            </li>
          </ul>


        </div>
      </div>
    </div>
  </header>

</template>


<style lang="scss">

  .header{

    background-color: var(--color-dark);
    color: var(--color-light);
    font-size: calc( var(--text-size-base) * 0.9 );

    padding: 20px 0;
    position: relative;
    z-index: 10;

    a
      {
        &, &:hover, &:focus, &:visited{
          text-decoration: none;
          text-decoration: none !important;
        }

        color: var(--color-light);
      }

    &__logo{
      display: inline-block;
      width: 230px;

      img{
        display: block;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .header-nav-desktop
  {
    margin-left: 0;
    margin-bottom: 0;
    list-style: none;
    text-align: right;

    li
      {
        display: inline-block;
        margin-left: 40px;
        margin-bottom: 0;

        &:first-child { margin-left: 0;}

        a{
          &.active{
            cursor: default;
            &, &:hover { color: var(--color-orange); }
          }

          &:hover
            {
                color: var(--color-blue);
            }
        }

      }


      @media screen and (max-width: 980px){
        opacity: 0;

        position: absolute;
        right: 0;
        top: 80px;
        background-color: var(--color-dark);

        padding: 10px 0;
    

        li
          {
            display: block;
            margin-left: 0;
            margin-bottom: var(--space);
            text-align: right;
            padding: calc( var(--paddings)/2 ) var(--paddings) 0;
          }

        &.active
          {
            opacity: 0;
            animation: 0.3s fadeIn ease-in forwards;
          }
      }
  }

  #header-nav-toggler 
    {
      display: none;

      @media screen and (max-width: 980px) 
        {
          display: block;

          .sprite-basic-hamburger-close { display: none; }

          &.active .sprite-basic-hamburger {display: none; }
          &.active .sprite-basic-hamburger-close {display: inline-block; }
        }
    }

  .langTog {

    text-transform: uppercase;
    position: relative;

    &:hover {
      .langTog__cur {
        background-color: var(--color-light);
        color: var(--color-blue);
      }

      .langTog__menu{
        opacity: 1;
      }
    }

    &__cur {
      border: 1px solid var(--color-light);
      padding: 0.2rem 0.4rem;
      
      &__text {
        vertical-align: middle;
      }

      &__arrow {
        vertical-align: top;
        line-height: 1;
        margin-left: 0.2rem;
      }
    }

    &__menu {
      transition: 0.2s ease opacity;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      margin-left: 0;
      text-align: left;
      opacity: 0;

      &, a { color: var(--color-dark); }

      li {
        display: block;
        margin-left: 0;
        padding-top: 0.2rem;

        &:first-child{
          padding-top: 0.8rem;
        }

        @media screen and (max-width: 980px)  {
          padding-top: 0;
          margin-bottom: 0;
        }
      }

      a {
        display: block;
        background-color: var(--color-light);
        padding: 0.2rem 0.4rem;
      }
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
