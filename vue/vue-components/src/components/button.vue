<template>
  <button :class="'i-button-size'+size" @click="handClick">
    <slot name="icon"></slot>
    <slot>按钮</slot>
  </button>
</template>

<script>
function oneOf (value, validList) {
    if (validList.indexOf(value) == -1) {
      return false
    }
    return true
  }
export default {
  props: {
    size: {
      // type: String,
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    }
  },
  data () {
    return {
      message: '子组件的内容'
    }
  },
  methods: {
    handClick () {
      this.$emit('onClick')
    },
    sureClick () {
      this.$emit('sendMessage', this.message)
    }
  },
}
</script>

<style>
button {
  border: 1px solid orange;
  background-color: rgb(234, 243, 106);
  color: rgb(134, 133, 133);
  border-radius: 20px;
}
.i-button-sizelarge {
  padding: 10px 16px;
}
.i-button-sizedefault {
  padding: 8px 14px;
}
.i-button-sizesmall {
  padding: 4px 10px;
}
</style>