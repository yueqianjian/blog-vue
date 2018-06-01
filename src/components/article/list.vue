<template>
  <div class="list">
    <div class="list-main" v-for="item in articleList" :key="item._id">
      <div>
        <p @click="saveArticle(item)">
          <router-link :to="`/article/detail/${item._id}`">{{ item.title }}</router-link>
        </p>
        <p>{{ item.info }}</p>
        <p>{{ item.createTime | format }}</p>
      </div>
      <div>

      </div>
    </div>
    <div class="list-footer">
      <Page :total="100" show-sizer></Page>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  moment.locale('zh-cn')

  export default {
    name: "list",
    filters: {
      format (v) {
        return moment(v).format('llll')
      }
    },
    computed: {
      articleList() {
        return this.$store.state.articleList;
      }
    },
    methods: {
      saveArticle (e) {
        this.$store.commit('update', ['article', e])
      }
    },
    beforeCreate() {
      return Promise.all([
        this.$store.dispatch('getArticleList')
      ]);
    }
  }
</script>

<style scoped lang="scss">
  .list {
    .list-main {
      padding: 24px 50px;
      border-bottom: 1px solid #eee;
      display: flex;
      > div {
        &:first-child {
          flex: 1;
          > p {
            &:first-child {
              font-size: 20px;
              font-weight: 600;
            }
            &:nth-child(2) {
              font-size: 14px;
              margin-bottom: 8px;
            }
            &:last-child {
              margin-top: 8px;
            }
          }
        }
        &:last-child {
          width: 120px;
          padding-right: 16px;
          padding-top: 8px;
        }
      }
    }
    .list-footer {
      padding-top: 16px;
      display: flex;
      justify-content: center;
    }
  }
</style>
