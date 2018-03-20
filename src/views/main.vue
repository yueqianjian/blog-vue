<template>
  <div class="main">
    <my-header></my-header>
    <content class="content">
      <router-view class="content-cell" />
    </content>
    <my-footer></my-footer>
    <mp3></mp3>
  </div>
</template>

<script>
import MyHeader from "@/components/main/myHeader";
import MyFooter from "@/components/main/myFooter";
import Mp3 from "@/components/mp3";
export default {
  components: {
    MyHeader,
    MyFooter,
    Mp3
  },
  data() {
    return {
      msg: "helloworld"
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  mounted() {
    this.$store.commit("increment");
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  padding-top: 76px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .content-cell {
      flex: 1;
      width: 980px;
      height: 100%;
      margin: 0 auto;
    }
  }
}
</style>

