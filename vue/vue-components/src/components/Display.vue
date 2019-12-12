<template>
  <div>
    <h3>动态渲染.vue 文件的组件 -- display</h3>
    <iDisplay :code="code"></iDisplay>
  </div>
</template>

<script>
import iDisplay from '@/components/display/display.vue'
import code from '@/components/display/display.js'
export default {
  data () {
    return {
      code: code
    }
  },
  components: {
    iDisplay
  }
}
</script>

<style>

</style>