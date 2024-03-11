<template>
	<div class="page-inside">

	  <div class="w-text services-title">
	    <h1 v-html="title"/>
	  </div>

    <div class="services w-base">
      <g-link :to="service1Link" class="item item-air" style="background-color: var(--color-blue)">
        <div class="desc">
          <h2>{{service1Title}}</h2>
          <p>{{service1Desc}}</p>
          <button class="btn-white">{{serviceBtn}}</button>
        </div>
      </g-link>

    </div>
	  
	</div>
</template>



<style scoped>

.services-title {
  margin-bottom: calc(var(--space) * 5);
}

.item {
  position: relative;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  margin-bottom: calc(var(--space) * 3);
  padding: calc(var(--space) * 3) calc(var(--space) * 1.5);
  position: relative;
  text-decoration: none;
  border-radius: 21px;
}


.item .desc {
  position: relative;
  color: var(--color-light);
  font-weight: 400;
  z-index: 10;
}

.item .desc h2 {
  margin-top: 0;
  margin-bottom: calc(var(--space) * 0.5);
  text-align: left;
  color: var(--color-light);
}

.item button {
  color: var(--color-blue);
  border-color: transparent;
}

@media screen and (max-width: 570px) {
  .item-air {
    padding-bottom: 300px;
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
      service3Title: { type: String, default: '' },
      service3Link: { type: String, default: '' },
      service3Desc: { type: String, default: '' },
      serviceBtn: { type: String, default: 'Подробнее' },
      imgClass: { type: String, default: '' },
  }
}
</script>