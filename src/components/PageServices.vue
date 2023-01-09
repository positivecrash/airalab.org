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



<style scoped>

.item {
  background-color: #f2f2f2;
  display: block;
  margin-bottom: calc(var(--space) * 2);
  overflow: hidden;
  padding: calc(var(--space) * 1.5);
  position: relative;
  text-decoration: none;
}

.item img {
  bottom: 0;
  max-width: 100%;
  position: absolute;
  right: 0;
  z-index: 0;
}

.item .desc {
  color: #000;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.item .desc h2 {
  margin-top: 0;
  text-align: left;
}

@media screen and (min-width: 1050px) {
  .item { padding-bottom: 170px; }
  .item .desc { width: 50%; } 
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