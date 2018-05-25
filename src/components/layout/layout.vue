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

</style>
