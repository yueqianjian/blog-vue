<template>
  <div class="article-content markdown-body" v-html="htmlContent"></div>
</template>

<script>
  import Marked from "marked";
  import 'github-markdown-css'

  export default {
    name: "articleContent",
    props: {
      content: {
        type: String,
        required: true
      }
    },
    computed: {
      htmlContent() {
        return Marked(this.content)
      }
    }
  }
</script>

<style scoped lang="scss">
  .article-content {
    width: 100%;
  }
</style>
