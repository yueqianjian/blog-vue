<template>
  <div class="detail">
    <article-title v-model="title"></article-title>
    <article-content :content="content"></article-content>
  </div>
</template>

<script>
  import ArticleTitle from "./articleTitle";
  import ArticleContent from "./articleContent";

  export default {
    name: "detail",
    components: {
      ArticleTitle,
      ArticleContent
    },
    data () {
      return {
        title: 'title',
        content: ''
      }
    },
    computed: {
      router() {
        return this.$store.state.route
      }
    },
    created () {
      console.log(this.router)
    }
  }
</script>

<style scoped lang="scss">

</style>
