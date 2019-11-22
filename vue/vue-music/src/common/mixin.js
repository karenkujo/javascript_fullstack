import {mapActions} from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions(['saveSearchHistory', 'deleteSearchHistory', 'clearSearchHistory']),
    saveSearch (song) {
      this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    onQueryChange (query) {
      this.query = query.trim()  // 去空格
    }
  }
}