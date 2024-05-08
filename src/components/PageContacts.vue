<template>

    <div class="page-inside">
    <div class="w-text">
        <h1>{{ title }}</h1>
        <p><b>{{ organization }}</b></p>
        <p>{{ organizationDescription }}</p>
        <div v-if="lang == 'ru'">
          <p ><b>ОКВЭД: </b><br/>62.01 Разработка компьютерного программного обеспечения</p>
          <p>72.19 Научные исследования и разработки в области естественных и технических наук</p>
        </div>
        <p v-if="lang == 'ru'"><b>ИНН: </b><br/>6321439834</p>
        <p><b>E-mail: </b><br/><a :href="`mailto:${$static.metadata.email}`">{{$static.metadata.email}}</a></p>
        <div class="contacts-options">
          <div class="contacts-options__items">
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zm-90.7 96.7c-9.7-2.6-19.9 2.3-23.7 11.6l-20 48c-3.4 8.2-1 17.6 5.8 23.2L280 231.7c-16.6 35.2-45.1 63.7-80.3 80.3l-20.2-24.7c-5.6-6.8-15-9.2-23.2-5.8l-48 20c-9.3 3.9-14.2 14-11.6 23.7l12 44C111.1 378 119 384 128 384c123.7 0 224-100.3 224-224c0-9-6-16.9-14.7-19.3l-44-12z"/></svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/></svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg></span>
          </div>
          <a href="tel:+79171569724">+7 (917) 156-97-24</a>
        </div>
        <address><b> {{ address }}:  </b><br/>{{addressDescription}}</address>
        <p v-if="lang == 'ru'">Технологический стэк: Python, JavaScript, Vue, Rust, Haskell</p>
      </div>
  </div>
  
</template>

<static-query>
query {
  metadata {
    email
  }
}
</static-query>

<script>
export default {
  props: {
      title: { type: String, default: '' },
      organization: { type: String, default: '' },
      organizationDescription: { type: String, default: '' },
      phoneTitle: { type: String, default: '' },
      address: { type: String, default: '' },
      addressDescription: { type: String, default: '' },
      lang: { type: String, default: '' }
  }
}
</script>

<style scoped>

  div {
    margin-bottom: var(--space);
  }

  .contacts-options__items {
    display: flex;
    align-items: center;
    margin-bottom: calc(var(--space) * 0.5);
  }

  .contacts-options__items span {
    width: 32px;
    height: 32px;
  }

  .contacts-options__items span:not(:last-child) {
    margin-right: calc(var(--space) * 0.5)
  }

  address {
    font-style: normal;
  }

</style>
