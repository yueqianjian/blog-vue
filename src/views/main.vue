<template>
  <div class="main">
    <my-header></my-header>
    <router-view class="content" />
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
  padding-top: 80px;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
  }
}
</style>

