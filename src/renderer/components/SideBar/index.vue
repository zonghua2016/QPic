<!--
 * @Author       : tongzonghua
 * @Date         : 2020-07-13 00:05:40
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2020-07-13 00:40:39
 * @Email        : tongzonghua@360.cn
 * @Description  : 侧边栏
 * @FilePath     : /workspace/QPic/src/renderer/components/SideBar/index.vue
--> 
<template>
  <div class="sidebar">侧边栏</div>
</template>
<script>
export default {
  name:'SideBar'
}
</script>
<style lang="less" scoped>
.sidebar{
  width: 170px;
  height: calc(100vh - 22px);
  overflow: hidden;
  overflow-y: scroll;
  background: transparent;
}
</style>