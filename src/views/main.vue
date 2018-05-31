<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
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

