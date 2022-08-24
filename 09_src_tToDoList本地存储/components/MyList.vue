<template>
	<ul class="todo-main">
		<Item v-for="todo of todos" :key="todo.id" :todoObj="todo" :checkToDo="checkToDo" :deleteTodo="deleteTodo">
		</Item>
	</ul>
</template>

<script>
import Item from './MyItem.vue'
export default {
	name: 'MyList',
	components: { Item },
	data() {
		return {

		}
	},
	methods: {
	},
	props: {
		todos: {
			type: Array,
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
	},
	watch: {
		checkToDo: {
			handler(newObj) {
				console.log('我是Mylist触发了checkTodo函数', newObj)
			},
			deep: true
		}
	}
}
</script>

<style scoped>
/*main*/
.todo-main {
	margin-left: 0px;
	border: 1px solid #ddd;
	border-radius: 6px;
	padding: 0px;
}

.todo-empty {
	height: 40px;
	line-height: 40px;
	border: 1px solid #ddd;
	border-radius: 6px;
	padding-left: 5px;
	margin-top: 10px;
}
</style>