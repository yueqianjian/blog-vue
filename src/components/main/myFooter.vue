<template>
  <footer class="my-footer">
    {{ msg }}
  </footer>
</template>

<script>
export default {
  data() {
    return {
      msg: "2018 ©"
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  width: 100%;
}
.my-footer {
  max-width: 1012px;
  margin: 40px auto 0;
  padding: 0 12px;
  height: 106;
  line-height: 106px;
  background: #ffffff;
  border-top: 1px #e1e4e8 solid;
}
</style>