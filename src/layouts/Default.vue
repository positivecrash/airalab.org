<template>
  
  <div class="layout">
    <header class="header" role='banner'>
      <div class="w-base">
        <div class="d-t w-full">
          <div class="d-t_cell align-v-m">

            <g-link to="/" class="header__logo"><g-image :alt="$static.metadata.siteName" src="~/assets/images/logo-airalabrus.png" quality="100"/></g-link>
          </div>

          <div class="d-t_cell align-v-m t-align-right">
            <a id="header-nav-toggler" href="#" @click.prevent="MobileNav" :class="{active: isActive}">
              <g-image class="sprite-basic-hamburger" alt="открыть меню" src="~/assets/images/hamburger.svg"/>
              <g-image class="sprite-basic-hamburger-close" alt="скрыть меню" src="~/assets/images/hamburger-close.svg"/>
            </a>

            <ul class="header-nav-desktop" :class="{active: isActive}">
              <li><g-link to="https://dapp.airalab.org/" target="_blank">DAPP</g-link></li>
              <li><g-link :to="$static.metadata.bloglink" target="_blank">Блог</g-link></li>
              <li><g-link to="/contacts/">Контакты</g-link></li>
              <li><g-link to="/donation/">Поддержать команду</g-link></li>
              <li><g-link to="/service-blockchain-stamp/">Заказать услугу</g-link></li>
            </ul>

          </div>
        </div>
      </div>
    </header>

    <slot/>

    <footer role="contentinfo">
      <div class="w-base">
        <div class="footer-row d-t w-full">
          <div class="d-t_cell align-v-m"><g-link :to="$static.metadata.subscribelink" target="_blank">Рассылка важных новостей</g-link></div>
          <div class="d-t_cell align-v-m t-align-right">Пишите на: <g-link :to="'mailto:'+$static.metadata.email" v-html="$static.metadata.email"/></div>
        </div>
      </div>
    </footer>

  </div>
  
</template>

<static-query>
query {
  metadata {
    siteName,
    bloglink,
    subscribelink,
    email
  }
}
</static-query>

<style lang="scss">

  a 
  {
    color: var(--color-blue);
    transition: 0.2s ease-in color;

    &:hover{
      color: var(--color-orange);
    }
  }

  h1, h2, h3, h4, h5
  {
    line-height: 1.2;
    margin-top: calc(var(--space)*2);
    margin-bottom: var(--space);
    text-align: center;

      &:first-child
        {
          margin-top: 0;
      }
  }

  h1
    {
      font-size: var(--text-size-title);
      margin-bottom: calc(var(--space)*2);
      background-color: var(--color-yellow);
    }

  ul, ol
  {
      margin-left: 20px;
      margin-bottom: var(--space);

      ul, ol{
        margin-top: var(--space);
      }
    }



  li, p, blockquote
    {
      margin-bottom: var(--space);

      &:last-child{
        margin-bottom: 0;
      }
    }

  
  .t-color-red { color: var(--color-red); }
  .t-color-blue { color: var(--color-blue); }
  .t-color-green { color: var(--color-green); }
  .t-color-white { color: var(--color-light); }

  .sec-bordered{
    border: 1px solid var(--color-gray);
    padding: var(--space);
  }
  
  .section {
    padding-top: calc( var(--space) * 2 );
    padding-bottom: calc( var(--space) * 2 );
  }

  .section-gray{
    margin-top: calc( var(--space) * 2 );
    margin-bottom: calc( var(--space) * 2 );
    background-color: var(--color-lightgray);
  }


  .page-inside{
    padding-top: 5rem;
    padding-bottom: 12rem;

    @media screen and (max-width: 630px){
      padding-bottom: 15rem;
    }
  }



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
        display: inline;
        margin-left: 40px;

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


<script>

export default {


  data(){
    return {
      isActive: false
    }
  },

  methods: {
    MobileNav: function() {
      this.isActive = !this.isActive;
    }
  }

}

</script>
