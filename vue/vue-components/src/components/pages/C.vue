<template>
  <div class="c-test">CCCC{{app.userInfo.age}}
    <button @click="changeApp">change</button>
  </div>
</template>

<script>
export default {
  inject: ['app'],
  mounted () {
    console.log(this.app.userInfo)
  },
  methods: {
    // changeApp () {
    //   app.userInfo.age = 16
    // }
  }
}
</script>

<style>

</style>