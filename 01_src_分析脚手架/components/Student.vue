<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生姓名 {{ studentName }}</h2>
        <h2>学生年龄 {{ age }}</h2>
        <Button @click="showName">按钮</Button>
    </div>
</template>
<script>
// es模块化暴露
export default {
    name: 'Student',
    data() {
        return {
            studentName: 'zs',
            age: 23
        }
    },
    methods: {
        showName() {
            alert(this.studentName)
        }
    },
}
</script>
