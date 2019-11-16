<template>
  <div class="count">
    {{count}}
    <button @click="addAction(10)">+</button>
    <button @click="reduce(5)">-</button>
    {{getCount}}
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  // mounted () {
  //    console.log(mapState)
  // },
  // computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count,
  //   myCount (state) {
  //     return state.count
  //   }
  // }),
  //computed: mapState(['count']),
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getCount'
    ])
  },
  methods: {
    ...mapMutations([
      'add',
      'reduce'
    ]),
    ...mapActions([
      'addAction',
      'reduceAction'
    ])
  }
}
</script>

<style>

</style>