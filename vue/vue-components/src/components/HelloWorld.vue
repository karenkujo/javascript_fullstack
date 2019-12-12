<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="large" @onClick="btn1"><i slot="icon">*/</i>按钮</i-button>
    <i-button size="small" @onClick="btn2">提交</i-button>
    <i-button size="default" ref="sure" @click.native="oSure" @sendMessage="getMssage">确认</i-button>
    <!-- <div @click="oSure">
      <i-button size="default" ref="sure" >确认</i-button>
    </div> -->
    <div>{{message}}</div>
    <div class="button" @click="showToast">Toast</div>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: ''
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    btn1 () {
      console.log('hello')
    },
    btn2 () {
      console.log('world')
    },
    oSure () {
      this.$refs.sure.sureClick()
    },
    getMssage(msg) {
      this.message = msg
    },
    showToast () {
      this.$toast('网络异常')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
