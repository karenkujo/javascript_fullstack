<template>
  <div class="a-test">
    AAAAAAAAAAAAAAAAAAA
    <test-b></test-b>
  </div>
</template>

<script>
import B from './B'
export default {
  provide: {
    name: '蜗牛'
  },
  components: {
    'test-b': B
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>