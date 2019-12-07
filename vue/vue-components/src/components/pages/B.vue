<template>
  <div class="b-test">
    B{{name}}
    <div>
      <test-c></test-c>
    </div>
  </div>
</template>

<script>
import C from './C'
export default {
  inject: ['name'],
  mounted () {
    console.log(this.name)
  },
  components: {
    'test-c': C
  }
}
</script>

<style>

</style>