<template>
  <div class="container">
    <h2>父组件</h2>
    <!-- <child1 :title="oTitle" />
    <child2 @test="getTitle" /> -->
    <child1  />
    <child2  />
  </div>
</template>

<script>
import child1 from './child1'
import child2 from './child2'
export default {
  data () {
    return {
      oTitle: '我是child2的数据'
    }
  },
  components: {
    'child1': child1,
    'child2': child2
  },
  methods: {
    getTitle (e) {
      this.oTitle = e
    }
  }
}
</script>

<style>

</style>