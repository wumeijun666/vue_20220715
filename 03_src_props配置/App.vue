<template>
	<div>
		<Student name="李四" sex="aaa" :age="23"></Student>
	</div>
</template>

<script>
	//引入School组件
	import Student from './components/Student.vue'

	export default {
		name:'App',
		components:{Student},
	}
</script>
