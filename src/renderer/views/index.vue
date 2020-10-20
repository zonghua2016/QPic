import SideBar from '@/components/SideBar';
<!--
 * @Author       : tongzonghua
 * @Date         : 2020-07-13 00:04:24
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2020-10-21 01:47:14
 * @Email        : tongzonghua@360.cn
 * @Description  : 主页面、布局
 * @FilePath     : /cli/QPic/src/renderer/views/index.vue
--> 
<template>
  <div class="main">
    <div class="main_page">
      <Content />
    </div>
  </div>
</template>
<script>
import Content from "@/components/Content";
export default {
  name: "Index",
  components: {
    Content
  }
};
</script>
<style lang="less" scoped>
</style>