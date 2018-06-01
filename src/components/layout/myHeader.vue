<template>
  <header class="my-header">
    <div>
      <div class="logo"  @click="go('/')">千简</div>
      <div class="menu">
        <template v-for="item in menu">
          <div v-if="item.title === '写作'?isAdmin:true" @click="go(item.to)">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#${item.icon}`"></use>
            </svg>
            <span>{{ item.title }}</span>
          </div>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "写作",
          to: "/article/edit",
          icon: "icon-write"
        },
        {
          title: "文章",
          to: "/article",
          icon: "icon-wenzhang"
        },
        {
          title: "游戏",
          to: "/game",
          icon: "icon-game"
        }
      ]
    };
  },
  computed: {
    isAdmin() {
      return this.$store.state.isAdmin
    }
  },
  methods: {
    go (e) {
      if(e === '/article/edit'){
        this.$store.commit('update', ['article', {}])
        this.$store.commit('update', ['articleContent', ''])
      }
      this.$router.push(e)
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  width: 100%;
}
.my-header {
  height: 56px;
  line-height: 56px;
  background: #000000;
  color: #ffffff;
  margin-bottom: 20px;
  & > div {
    max-width: 1012px;
    padding: 0 12px;
    margin: 0 auto;
    display: flex;
    .logo {
      width: 100px;
      min-width: 100px;
      cursor: pointer;
      font-size: 18px;
    }
    .menu {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      & > div {
        width: 100px;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 20px;
        & > i {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
