<template>
    <div class="my-content">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "myContent"
  }
</script>

<style scoped lang="scss">
  .my-content {
    max-width: 1012px;
    padding: 0 12px;
    margin: 0 auto;
  }
</style>
