<template>
  <div>
    <span @mousedown="start" style="position:absolute; left:0; top:0">这是一个拖拽的文本</span>
    <el-button @click="open">open</el-button>
    <el-dialog title="tips" :visible="visible">
      <span @click="close">这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
import mixin from './visible'
import dragAbleMix from './drag'
export default {
  mixins: [mixin, dragAbleMix]
}
</script>

<style>

</style>