<template>
  <!--首页-->
  <div class="wrapper">
    <!--顶栏-->
    <HeaderBar></HeaderBar>
    <!--顶部的tabs及列表内容-->
    <HeaderTabs class="tabs"></HeaderTabs>
    <!--底部导航-->
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue'
import HeaderTabs from '../components/HeaderTabs.vue'
import FooterNav from '../components/FooterNav.vue'
export default {
  name: 'index',
  components: {
    FooterNav,
    HeaderBar,
    HeaderTabs
  }
}
</script>

<style scoped>

</style>
