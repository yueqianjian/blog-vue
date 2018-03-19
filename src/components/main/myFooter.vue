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
$blue: #2d8cf0;
.my-footer {
  height: 48;
  line-height: 48px;
  background: #ffffff;
}
</style>