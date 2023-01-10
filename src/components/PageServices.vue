<template>
	<div class="page-inside">

	  <div class="w-text services-title">
	    <h1 v-html="title"/>
	  </div>

    <div class="services w-base">
      <g-link :to="service1Link" class="item item-air" style="background-color: var(--color-blue)">
        <div class="img img-air" :class="imgClass">
          <g-image src="@/assets/images/service-air-monitoring.png" :alt="service1Title"/>
        </div>
        <div class="desc">
          <h2>{{service1Title}}</h2>
          <p>{{service1Desc}}</p>
          <button class="btn-white">{{serviceBtn}}</button>
        </div>
      </g-link>

      <g-link :to="service3Link" class="item" style="background-color: var(--color-blue)">
        <div class="img img-water">
          <g-image src="@/assets/images/service-water-monitoring.png" :alt="service3Title"/>
        </div>
        <div class="desc">
          <h2>{{service3Title}}</h2>
          <p>{{service3Desc}}</p>
          <button class="btn-white">{{serviceBtn}}</button>
        </div>
      </g-link>

      <g-link :to="service2Link" class="item" style=" background-color: var(--color-blue)">
        <div class="img img-stamp">
          <g-image src="@/assets/images/service-blockchain-stamp.png" :alt="service2Title"/>
        </div>
        <div class="desc">
          <h2>{{service2Title}}</h2>
          <p>{{service2Desc}}</p>
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
  justify-content: flex-end;
  margin-bottom: calc(var(--space) * 3);
  padding: calc(var(--space) * 3) calc(var(--space) * 1.5);
  position: relative;
  text-decoration: none;
  border-radius: 21px;
}

.item .img {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 0;
}

.item .img-air {
  max-width: 588px;
  top: -50px;
}

.item .img-air-en {
  top: -82px;
}

.item .img-water {
  max-width: 612px;
  bottom: -52px;
  left: -53px;
}

.item .img-stamp {
  max-width: 468px;
  bottom: -24px;
  left: -25px;
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
  color: var(--color-blue)
}

@media screen and (max-width: 1200px) {
  .item .img-air {
    max-width: 499px;
    top: calc(100% - 478px);
  }

  .item .img-water {
    max-width: 515px;
    left: -11px;
  }

  .item .img-stamp {
    max-width: 468px;
    bottom: -24px;
    left: -25px;
  }
}

@media screen and (min-width: 1050px) {
  .item .desc { width: 50%; } 
}

@media screen and (max-width: 1050px) {
  .item {
    flex-direction: column-reverse;
    text-align: center;
    min-height: 600px;
  }

  .item .desc h2 {
    text-align: center;
  }

  .item .img-air {
    max-width: 420px;
    top: unset;
    bottom: -9px;
  }

  .item .img-water {
    max-width: 626px;
    left: 50%;
    transform: translateX(-50%);
  }

  .item .img-stamp {
    max-width: 423px;
    bottom: -27px;
    left: 50%;
    transform: translateX(-50%);
  }
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