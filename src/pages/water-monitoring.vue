<template>
  <Redirect />
</template>

<script>
  export default {
    components: {
      Redirect: () => import('~/components/Lang.vue')
    }
  }
</script>
