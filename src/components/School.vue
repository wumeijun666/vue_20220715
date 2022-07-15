<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校地址 {{ schoolName }}</h2>
    <h2>学校名字 {{ address }}</h2>
    <Button @click="showName">按钮</Button>
  </div>
</template>
<script>
// es模块化暴露
export default {
  name: 'School',
  data() {
    return {
      schoolName: '尚硅谷',
      address: '北京昌平',
    }
  },
  methods: {
    showName() {
      alert(this.schoolName)
    },
  },
}
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>