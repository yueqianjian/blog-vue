<template>
  <header class="my-header">
    <div>
      <div class="logo">LOGO</div>
      <div class="menu">
        <div v-for="item in menu">
          <Icon :type="item.icon"></Icon>
          <span>{{ item.title }}</span>
        </div>
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
          title: "文章",
          to: "#",
          icon: "clipboard"
        },
        {
          title: "游戏",
          to: "#",
          icon: "ios-nutrition"
        }
      ]
    };
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
