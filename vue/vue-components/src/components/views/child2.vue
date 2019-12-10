<template>
  <div class="child2">
    child2
    {{mess}}
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  data () {
    return {
      mess: ''
    }
  },
  mounted () {
    bus.$on('test', (text) => {
      console.log(text)
      this.mess = text
    })
  }
}
</script>

<style>

</style>