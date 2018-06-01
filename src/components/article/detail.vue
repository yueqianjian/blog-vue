<template>
  <div class="detail">
    <article-title v-model="article"></article-title>
    <article-content :content="article.content"></article-content>
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
    computed: {
      article () {
        return this.$store.getters.article
      }
    },
    created () {
      return Promise.all([
        this.$store.dispatch('getContent')
      ]);
    }
  }
</script>

<style scoped lang="scss">

</style>
