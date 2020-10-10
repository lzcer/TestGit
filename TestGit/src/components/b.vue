<template>
  <div>
    这是b组件
    <router-link to="/a">a</router-link>
    <button @click="toA">跳转到a</button>
    <a-child></a-child>
  </div>
</template>
<script>
import A from './a.vue'
export default {
  data() {
    return {}
  },
  methods: {
    toA() {
      this.$router.push({ path: '/a', query: { id: 1, name: '张三' } })
    }
  },
  components: {
    'a-child': A
  }
}
</script>
