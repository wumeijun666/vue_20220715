<template>
	<div class="todo-footer">
		<label>
			<!-- <input type="checkbox" :checked="isAllChecked" @change="handleAllCheck" /> -->
			<input type="checkbox" v-model="isAllChecked" />
		</label>
		<span>
			<span>已完成{{ totalStatus }}</span> / 全部{{ todoObjs.length }}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>

export default {
	name: 'MyFooter',
	data() {
		return {}
	},
	methods: {
		// handleAllCheck(e) {
		// 	this.todoObjs.forEach(item => {
		// 		item.status = e.target.checked
		// 	});
		// }
		clearAll() {
			this.clearAllTodo();
		}
	},
	props: ['todoObjs', 'clearAllTodo'],
	computed: {
		totalStatus() {
			console.log("一开始计算总共多少选中")
			// return this.todoObjs.filter(obj => obj.status === true).length
			let result = this.todoObjs.reduce((pre, current) => {
				if (current.status) {
					++pre;
				}
				return pre;
			}, 0);
			return result
		},
		/* 	
			计算属性如果只是读取不修改可以简写，如果需要修改计算属性，需要添加set方法
			isAllChecked() {
				return this.totalStatus === this.todoObjs.length && this.todoObjs.length > 0;
			}, */
		isAllChecked: {
			get() {
				return this.totalStatus === this.todoObjs.length && this.todoObjs.length > 0;
			},
			set(value) {
				this.todoObjs.forEach(item => {
					item.status = value
				});
			}
		}
	},
}
</script>
<style scoped>
/*footer*/
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>

