<template>
  <div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
  import FooterNav from '../components/FooterNav.vue'
  export default {
    components: {
      FooterNav
    },
  name: 'message'
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/_base.scss';
  .wrapper {
    @include wrapper;
    .content {
      margin: 1rem 0 3rem 0;
      .list-item {
        text-align: left;
        margin-top: 1rem;
        .list-item-content {
          position: relative;
          border-bottom: 0.6rem solid #EFF2F7;
          margin: 0.6rem;
          .message-time {
            float: right;
          }
          .message-ups {
            float: right;
          }
        }
        .msg-num {
          background-color: #f5f5f5;
          /*font-size: .2rem block;*/
          padding: 0 0.6rem;
          border-radius: 100%;
          position: absolute;
          right: 4rem;
          top: 1.2rem;
        }
        mu-list-item {
          color: red;
          background-color: red;
        }
      }
    }
  }

  .message-tip {
    text-align: center;
    font-size: 2.0rem;
    line-height: 100vh;
  }
</style>
