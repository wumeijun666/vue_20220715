<template>
	<div>
		<h2>学校名称：{{ name | mySlice }}</h2>
		<h2>学校地址：{{ address }}</h2>
		<input type="text" v-fbind:value="name" />
		<button @click="test">点我测试一个hello方法</button>
	</div>
</template>

<script>

export default {
	name: 'School',
	data() {
		return {
			name: '尚硅谷assffs',
			address: '北京',
		}
	},
	methods: {
		test() {
			console.log(this)
			this.hello()
		}
	}
}
</script>