<template>
  <header class="my-header">
    <div class="logo">LOGO</div>
    <div class="menu">
      <div v-for="item in menu">
        <Icon :type="item.icon"></Icon>
        <span>{{ item.title }}</span>
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
$blue: #2d8cf0;
.my-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  line-height: 64px;
  padding: 0 50px;
  background: $blue;
  color: #ffffff;
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
</style>