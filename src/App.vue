<template>
  <div>
    <stu></stu>
    <sch></sch>
  </div>
</template>

<script>
// 引入组件
import sch from "./components/School.vue";
import stu from "./components/Student.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    sch,
    stu,
  },
};
</script>

<style></style>
