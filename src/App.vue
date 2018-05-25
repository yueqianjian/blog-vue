<template>
  <layout>
    <router-view/>
  </layout>
</template>

<script>
  import Layout from "./components/layout/layout";
export default {
  name: "App",
  components: {
    Layout
  }
};
</script>
