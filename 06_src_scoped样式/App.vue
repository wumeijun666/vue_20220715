<template>
	<div>
		<h2 class="title"><span class="qwe">学习</span></h2>
		<Student ></Student>
		<hr />
		<School></School>
	</div>
</template>

<script>

import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
	name: 'App',
	components: { Student, School },
}
</script>
<style lang="less" scoped>
	.title{
		color:red;
		.qwe{
			font-size: 40px;
		}
	}
</style>