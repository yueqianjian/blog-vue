<template>
  <div class="login">
    <p>管理员登录</p>
    <p><span>账号</span><Input v-model="username" placeholder="Enter username..." style="width: 300px"></Input></p>
    <p><span>密码</span><Input v-model="password" type="password" placeholder="Enter password..."
                             style="width: 300px"></Input></p>
    <Button type="primary" @click="login">勇者踏上冒险！</Button>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login() {
        const { username, password } = this
        const data = await this.$store.dispatch('login', { username, password })
        if (!data) {
          return
        }
        this.$store.commit('update', ['isAdmin', true])
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    text-align: center;
    > p {
      height: 32px;
      line-height: 32px;
      margin-bottom: 5px;
      &:first-child {
        text-align: center;
        font-size: 20px;
      }
      > span {
        padding: 0 5px;
      }
    }
    > button {
      margin-top: 10px;
    }
  }
</style>
