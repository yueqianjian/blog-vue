<template>
  <div class="article-title">
    <input class="left" v-if="isEdit" :value="value" @input="handleInput" placeholder="title"/>
    <p class="left" v-else>{{ value }}</p>
    <p class="right">
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
</template>

<script>
  export default {
    name: "articleTitle",
    props: {
      value: {
        type: String
      },
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleInput(event) {
        let value = event.target.value;
        this.$emit('input', value);
      },
      editBtn () {
        this.$router.push('/article/edit')
        console.log('edit')
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
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    .left {
      padding: 0 5px;
      width: 160px;
      height: 32px;
      line-height: 32px;
    }
    .right {
      height: 32px;
      line-height: 32px;
    }
  }
</style>
