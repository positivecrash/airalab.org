<template>
	<div class="page-index">
	  <div class="w-text">
	    <h1 v-html="title"/>
	  </div>
	  <div id="page-index__banner"></div>
	  <div id="page-index__banner_lines"><span></span></div>
	</div>
</template>

<style scoped>
.page-index {
  background-color: var(--color-blue);
  color: var(--color-light);
  text-align: center;

  min-height: 850px;
  padding-top: 4rem;
  box-sizing: border-box;

  background-image: url('/pattern-dots-blue.png');
  background-repeat: repeat;

  position: relative;
}

.page-index .w-text {
  position: relative;
  z-index: 3;
}

.page-index h1 {
  background-color: transparent;
}

#page-index__banner, #page-index__banner_lines
  {
    position: absolute;
    left: 0;
    right: 0;
  }

#page-index__banner
{
  background-size: contain;
  top: 160px;
  bottom: 160px;
  z-index: 2;

  background-image: url('/index-banner-desktop.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

#page-index__banner_lines {
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

#page-index__banner_lines span {
  display: block;
  position: absolute;
  top: 92px;
  left: 306px;

  background-image: url('/index-banner-lines-desktop.png');
  /* width: image-width($img);
  height: image-height($img);
  margin-left: - image-width($img)/2; */

  background-position: 0 0;
  background-repeat: no-repeat;
}

@media screen and (max-width: 860px) {
  .page-index h1 {
    margin-top: 50px;
    font-size: calc( var(--text-size-title) * 0.7 );
  }

  .page-index h1 .w-text {
    max-width: 90%;
  }

  #page-index__banner {
    background-image: url('/index-banner-mobile.png');
    top: 120px;
    bottom: 120px;
  }

  #page-index__banner_lines span {
    background-image: url('/index-banner-lines-mobile.png');
    /* width: image-width($img);
    height: image-height($img);
    margin-left: - image-width($img)/2; */
    left: 241px;
  }
}
</style>


<script>
export default {
  props: {
      title: { type: String, default: '' }
  }
}
</script>