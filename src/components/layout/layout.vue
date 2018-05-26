<template>
    <div id="app">
      <my-header></my-header>
      <my-content>
        <slot></slot>
      </my-content>
      <my-footer></my-footer>
    </div>
</template>

<script>
  import MyHeader from "./myHeader";
  import MyFooter from "./myFooter";
  import MyContent from "./myContent";
  export default {
    name: "layout",
    components: {
      MyHeader,
      MyFooter,
      MyContent
    }
  }
</script>

<style scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
