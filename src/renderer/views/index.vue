import SideBar from '@/components/SideBar';
<!--
 * @Author       : tongzonghua
 * @Date         : 2020-07-13 00:04:24
 * @LastEditors  : tongzonghua
 * @LastEditTime : 2020-07-13 00:51:35
 * @Email        : tongzonghua@360.cn
 * @Description  : 主页面、布局
 * @FilePath     : /workspace/QPic/src/renderer/views/index.vue
--> 
<template>
  <div class="qpic">
    <div class="fake_title_bar">
      <div class="title">QPic</div>
    </div>
    <div class="main_page">
      <SideBar />
      <Content />
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
import Content from "@/components/Content";
export default {
  name: "Index",
  components: {
    SideBar,
    Content
  }
};
</script>
<style lang="less" scoped>
.qpic {
  .fake_title_bar {
    -webkit-app-region: drag;
    height: 22px;
    width: 100%;
    text-align: center;
    color: #eee;
    font-size: 12px;
    line-height: 22px;
    position: fixed;
    z-index: 100;
    background: transparent;
    background-image: linear-gradient(
      to right,
      transparent 0%,
      transparent 167px,
      rgba(33, 51, 54, 0.7) 167px,
      rgba(33, 51, 54, 0.7) 100%
    );
    .title {
      padding-left: 167px;
    }
  }
  div.main_page {
    display: flex;
  }
}
</style>