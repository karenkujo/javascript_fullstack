<template>
  <div class="child">
    <h2>兄弟组件2(传递状态给兄弟组件1)</h2>
    <div>
      <button @click="sendMsg">send message</button>
    </div>
  </div>
</template>

<script>
import Bus from '@/assets/bus'
export default {
  data () {
    return {
      title: '我是child2的数据'
    }
  },
  methods: {
    sendMsg () {
      // this.$emit('test', this.title)
      Bus.$emit('test', this.title)
    }
  }
}
</script>

<style>

</style>