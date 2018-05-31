<template>
  <div class="edit">
    <article-title v-model="articleData" :is-edit="isEdit" @saveArticle="createArticle"></article-title>
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
      }
    },
    methods: {
      createArticle () {
        let { articleData,content } = this
        let { title,info } = articleData
        this.$http.post(`${this.host}/api/article/create`,{
          title,
          info,
          content
        }).then((res) => {
          this.articleData = {}
          this.content = ''
          console.log(res)
        }).catch((err) => {
          console.log(err)
        });
      },
      findById (id) {
        this.$http.post(`${this.host}/api/article/findById`,{
          id
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        });
      },
      remove (id) {
        this.$http.post(`${this.host}/api/article/remove`, {
          id
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        });
      },
      update (id, data) {
        this.$http.post(`${this.host}/api/article/update`, {
          id,
          data
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        });
      }
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
