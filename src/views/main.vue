<template>
  <div class="main">
    {{ articleList }}
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-wxbzhuye"></use>
    </svg>
    <!--<mp3></mp3>-->
  </div>
</template>

<script>
import Mp3 from "../components/mp3";
export default {
  components: {
    Mp3
  },
  data() {
    return {
      msg: "msg"
    };
  },
  computed: {
    articleList() {
      return this.$store.state.articleList;
    }
  },
  beforeMount() {
    return Promise.all([
      this.$store.dispatch('FETCH_ARTICLE_LIST')
    ]);
  }
};
</script>

<style lang="scss" scoped>
.main {
}
</style>

