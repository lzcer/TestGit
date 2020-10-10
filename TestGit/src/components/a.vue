<template>
  <div>
    这是a组件
    <router-link to="/b">b</router-link>
    <button @click="toB">跳转到b</button>
    <button @click="getParame">获取参数</button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    toB() {
      this.$router.push({ path: '/b' })
    },
    getParame() {
      var query = this.$route.query
      console.log(query)
    }
  }
}
</script>
