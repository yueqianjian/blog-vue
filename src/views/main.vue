<template>
  <div class="main">
    <list></list>
  </div>
</template>

<script>
  import List from "../components/article/edit";

  export default {
    components: {
      List
    },
    data() {
      return {
        msg: "msg"
      };
    }
  };
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
  }
</style>

