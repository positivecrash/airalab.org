<template></template>

<script>
import { geturl } from './mixins/geturl'

  export default {

    mixins: [geturl],

    mounted() {
      document.location.href = this.geturl();
    }

  }
</script>