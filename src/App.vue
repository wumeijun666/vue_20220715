<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader :addToDo="addToDo"></MyHeader>
				<MyList :todos="todos" :checkToDo="checkToDo" :deleteTodo="deleteTodo"></MyList>
				<MyFooter :todoObjs="todos" v-if="todos.length > 0" :clearAllTodo="clearAllTodo"></MyFooter>
			</div>
		</div>
	</div>

</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyList from './components/MyList.vue'

export default {
	name: 'App',
	components: { MyFooter, MyHeader, MyList },
	data() {
		return {
			todos: [
				{ id: '001', title: '吃饭', status: true },
				{ id: '002', title: '抽抽烟', status: false },
				{ id: '003', title: '喝酒', status: true },
			]
		}
	},
	methods: {
		// 添加一个todo
		addToDo(x) {
			console.log("接受儿子传来的数据", x)
			this.todos.unshift(x);
		},
		//取消或勾选一个todo
		checkToDo(id) {
			console.log("id=", id)
			this.todos.forEach(obj => {
				if (obj.id === id) {
					obj.status = !obj.status
				}
			})
		},
		//删除一个
		deleteTodo(id) {
			this.todos = this.todos.filter(obj => {
				return obj.id !== id
			});
		},
		// 清除所有已经完成的todo
		clearAllTodo(){
			// 所有状态为真的清除掉
			this.todos = this.todos.filter((todo)=>{
				return !todo.status
			})
		}
	}
} 
</script>
<style >
/*base*/
body {
	background: #fff;
}

.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
}

.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
}

.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
}

.btn:focus {
	outline: none;
}

.todo-container {
	width: 600px;
	margin: 0 auto;
}

.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>