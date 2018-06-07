<template>
  <div class="article-title">
    <div class="title">
      <input class="left" v-if="isEdit" :value="value.title" @input="titleInput" placeholder="title"/>
      <p class="left" v-else>{{ value.title }}</p>
      <p class="right" v-if="isAdmin">
        <svg v-if="isEdit" class="icon" aria-hidden="true" @click="saveBtn">
          <use xlink:href="#icon-save"></use>
        </svg>
        <svg v-else class="icon" aria-hidden="true" @click="editBtn">
          <use xlink:href="#icon-edit"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="delBtn">
          <use xlink:href="#icon-delete"></use>
        </svg>
      </p>
    </div>
    <div class="info">
      <textarea v-if="isEdit" :value="value.info" @input="infoInput" placeholder="edit info..."></textarea>
      <p v-else>{{ value.info }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "articleTitle",
    props: {
      value: {
        type: Object,
        default () {
          return {
            title: '',
            info: ''
          }
        }
      },
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        articleData: {}
      }
    },
    computed: {
      isAdmin() {
        return this.$store.state.isAdmin
      }
    },
    methods: {
      titleInput(event) {
        let value = event.target.value;
        let { articleData } = this
        articleData.title = value
        this.$emit('input', articleData);
      },
      infoInput(event) {
        let value = event.target.value;
        let { articleData } = this
        articleData.info = value
        this.$emit('input', articleData);
      },
      editBtn () {
        this.$router.push('/article/edit')
      },
      saveBtn () {
        this.$emit('saveArticle')
      },
      delBtn () {
        console.log('delete')
      }
    }
  }
</script>

<style scoped lang="scss">
  .article-title {
    > div {
      margin-bottom: 12px;
    }
    .title {
      display: flex;
      justify-content: space-between;
      .left {
        padding: 0 5px;
        width: 160px;
        height: 32px;
        line-height: 32px;
        color: #2d8cf0;
        font-size: 20px;
        font-weight: bold;
      }
      .right {
        height: 32px;
        line-height: 32px;
      }
    }
    .info {
      height: 32px;
      > * {
        padding: 0 5px;
        width: 100%;
        height: 32px;
        line-height: 32px;
        overflow: hidden;
        font-size: 18px;
      }
    }
  }
</style>
