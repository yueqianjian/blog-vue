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

<style>
  .icon {
    height: 32px;
    width: 50px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
