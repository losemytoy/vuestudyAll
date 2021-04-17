<template>
  <div>
    <h1>
      我是{{ $route.params.id }}
    </h1>
    <el-button type="danger" round @click="goBackHome">返回</el-button>
  </div>
</template>

<script>
export default {
  name: "home-detail",
  methods: {
    goBackHome() {
      this.$router.push({
        name: "home"
      })
    }
  }
}
</script>

<style scoped>

</style>
