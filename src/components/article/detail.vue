<template>
  <div class="detail">
    <article-title v-model="article" @deleteArticle="deleteArticle"></article-title>
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
    article() {
      return this.$store.getters.article;
    },
    params() {
      return this.$store.state.route.params;
    }
  },
  methods: {
    deleteArticle() {
      const { id } = this.params;
      this.$store.dispatch("deleteArticle", { id });
    }
  },
  created() {
    return Promise.all([this.$store.dispatch("getContent")]);
  }
};
</script>

<style scoped lang="scss">
</style>
