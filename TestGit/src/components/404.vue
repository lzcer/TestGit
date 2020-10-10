<template>
  <div>
    <button @click="goback">返回上级</button>
    <h1>404</h1>
  </div>
</template>
<script>
export default {
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>
