<template>
  <div id="app">
    <h1>karen's blog</h1>
    <button @click="showHide">show/hide highlighted post</button>
    <BlogPost v-for="blogPost in visibileBlogPosts" :key="blogPost.title" :post="blogPost"></BlogPost>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
  import BlogPost, { Post } from "./components/BlogPost.vue";
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      BlogPost
    }
  })

  export default class App extends Vue {
    private blogPosts: Post[] = [
      {
        title: 'My first blogpost ever!',
        body: 'welcome to my blog',
        author: 'karen',
        datePosted: new Date(2020, 1, 7)
      },
      {
        title: 'My second blogpost ever!',
        body: 'welcome to my blog',
        author: 'karen',
        datePosted: new Date(2020, 1, 8),
        highlighted: true
      },
      {
        title: 'My third blogpost ever!',
        body: 'welcome to my blog',
        author: 'karen',
        datePosted: new Date(2020, 1, 9)
      }
    ]

    public showHighlighted: boolean = true

    get visibileBlogPosts () {
      return this.blogPosts.filter((post: Post) => post.highlighted === undefined || post.highlighted === this.showHighlighted )
    }
    public showHide () {
      this.showHighlighted = !this.showHighlighted
    }
  }
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
