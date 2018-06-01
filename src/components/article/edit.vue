<template>
  <div class="edit">
    <article-title v-model="articleData" :is-edit="isEdit" @saveArticle="saveArticle"></article-title>
    <div class="edit-main">
      <div>
        <textarea v-model="content" placeholder="edit article..."></textarea>
      </div>
      <div>
        <article-content :content="content"></article-content>
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleTitle from "./articleTitle";
  import ArticleContent from "./articleContent";

  export default {
    name: "edit",
    components: {
      ArticleTitle,
      ArticleContent
    },
    data() {
      return {
        articleData: {
          title: '',
          info: '',
        },
        content: '',
        isEdit: true
      }
    },
    computed: {
      host() {
        return this.$store.state.host
      },
      article () {
        return this.$store.getters.article
      }
    },
    methods: {
      init () {
        let { article } = this
        this.articleData.title = article.title
        this.articleData.info = article.info
        this.content = article.content
      },
      async saveArticle () {
        let { articleData,content } = this
        let { title,info } = articleData
        if (!content | !title | !info) {
          this.$Message.error('文章内容未编辑完成！！！');
          return
        }
        await this.$store.dispatch('saveArticle', { title,info,content })
        this.articleData = {}
        this.content = ''
      }
    },
    created() {
      this.init()
    }
  }
</script>

<style scoped lang="scss">
  .edit {
    width: 100%;
    .edit-main {
      width: 100%;
      display: flex;
      > div {
        flex: 1;
        height: calc(100vh - 56px - 20px - 106px - 40px - 44px - 32px - 12px);
        overflow: auto;
        &:first-child {
          margin-right: 4px;
          > textarea {
            width: 100%;
            height: 100%;
            padding: 4px 7px;
            border: 1px solid #dddee1;
            vertical-align: bottom;
            font-size: 14px;
            line-height: 1.5;
            border-radius: 4px;
          }
        }
        &:last-child {
          margin-left: 4px;
          padding: 4px 7px;
          border: 1px solid #dddee1;
          border-radius: 4px;
        }
      }
    }
  }
</style>
