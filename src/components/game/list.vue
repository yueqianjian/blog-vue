<template>
  <div class="list">
    <div class="list-main" v-for="item in gameList" :key="item.title">
      <div>
        <p>
          <router-link :to="`/game/${item.title}`">{{ item.name }}</router-link>
        </p>
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
export default {
  name: "list",
  data() {
    return {
      gameList: [
        {
          name: "华容道",
          title: "huarongdao"
        }
      ]
    };
  }
};
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
