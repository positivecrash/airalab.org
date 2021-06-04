<template>
	<div class="page-inside">

	  <div class="w-text">
	    <h1 v-html="title"/>
	  </div>

    <div class="services w-base">
      <g-link :to="service1Link" class="item" style="background-color: #9cedfc;">
        <g-image src="~/assets/images/service-map.jpg"/>
        <div class="desc">
          <h2>{{service1Title}}</h2>
          <p>{{service1Desc}}</p>
          <button class="btn-black">{{serviceBtn}}</button>
        </div>
      </g-link>

      <g-link :to="service2Link" class="item" style="padding-bottom:210px">
        <g-image src="~/assets/images/service-stamp.jpg"/>
        <div class="desc">
          <h2>{{service2Title}}</h2>
          <p>{{service2Desc}}</p>
          <button class="btn-black">{{serviceBtn}}</button>
        </div>
      </g-link>
    </div>
	  
	</div>
</template>



<style lang="scss" scoped>

.item {
  position: relative;
  display: block;
  background-color: #f2f2f2;

  overflow: hidden;
  text-decoration: none;
  padding: calc(var(--space) * 1.5);
  margin-bottom: calc(var(--space) * 2);

  img {
      position: absolute;
      z-index: 0;
      bottom: 0;
      right: 0;
      max-width: 100%;
    }

  .desc {
    position: relative;
    z-index: 1;
    color: #000;
    font-weight: 500;

    @media screen and (min-width: 1050px) {
      width: 50%;
    }

    h2 {
      margin-top: 0;
      text-align: left;
    }
  }


  @media screen and (max-width: 1050px) {
    padding-bottom: 170px;
  }
}

</style>


<script>
export default {
  props: {
      title: { type: String, default: '' },
      service1Title: { type: String, default: '' },
      service1Link: { type: String, default: '' },
      service1Desc: { type: String, default: '' },
      service2Title: { type: String, default: '' },
      service2Link: { type: String, default: '' },
      service2Desc: { type: String, default: '' },
      serviceBtn: { type: String, default: 'Подробнее' },
  }
}
</script>