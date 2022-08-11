<template>
	<li>
		<label>
			<input type="checkbox" :checked="todoObj.status" @change="changeStatus(todoObj.id)" />
			<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，虽然没有报错，但是修改了props,只不过因为todoObj
			是一个对象，改变的是里面的属性值，没有改变地址值，也不会报错。但是如果用props绑定一个普通变量，比如
			字符串，修改props就会引发报错提示 -->
			<!-- <input type="checkbox" v-model="todoObj.status" /> -->
			<span>{{ todoObj.title }}</span>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
	</li>
</template>

<script>

export default {
	name: 'MyItem',
	data() {
		return {}
	},
	methods: {
		// 勾选改变状态
		changeStatus(id) {
			this.checkToDo(id)
		},
		//删除
		handleDelete(id) {
			let a = confirm('是否删除'+id);
			if(a){
				this.deleteTodo(id)
			}
		}
	},
	watch: {
		todoObj: {
			handler(newObj) {
				console.log("newObj",newObj)
			},
			deep:true
		}
	},
	props: {
		todoObj: {
			type: Object,
			required: true
		},
		checkToDo: {
			type: Function,
			required: true
		},
		deleteTodo: {
			type: Function,
			required: true
		}
	}
}
</script>

<style scoped>
/*item*/
li {
	list-style: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 5px solid rgb(224, 83, 83);
}

li label {
	float: left;
	cursor: pointer;
}

li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
}

li button {
	float: right;
	display: none;
	margin-top: 3px;
}

li:hover button {
	display: block;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}

li:hover {
	background-color: #ddd;
}
</style>