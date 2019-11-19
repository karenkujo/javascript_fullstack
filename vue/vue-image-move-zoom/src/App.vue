<template>
  <div id="app">
    <image-zoom 
    src="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg_430x430q90.jpg?tdsourcetag=s_pcqq_aiomsg" 
    bigSrc="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg?tdsourcetag=s_pcqq_aiomsg" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ImageZoom from './components/imageZoom'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ImageZoom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
