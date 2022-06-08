<template>
  <div>
		<!-- 트랜지션 적용 ul태그 대신에 transition-group 태그를 넣어주자 -->
		<transition-group name="list" tag="ul">
	  
		  <li v-for="(todoItem,index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
			<i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem,index})"></i>
			<span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
			<span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
				<i class="fas fa-trash-alt"></i>
			</span>
		  </li>
		</transition-group>
  </div>
</template>  

<script>
import {mapGetters, mapMutations } from 'vuex';

export default {
	methods: {
		...mapMutations({
			// span 태그에서 사용하는 함수名 : '호출되는 뮤테이션名'
			// 호출하는 단에서 (여기서는 span 태그쪽) 넘겨주는 매개변수가 있다면
			// 암묵적으로 mapMutations 에서 자동으로 넘겨준다.
			// 근데 보면 원래 mutation 호출할 때 객체로 넘겨줬으니까 html 쪽도 수정이 필요하다
			removeTodo : 'removeOneItem',
			toggleComplete : 'toggleOneItem'
		}),
			// removeTodo(todoItem,index){
			// 	//this.$emit('removeItem',todoItem,index);
			// 	this.$store.commit('removeOneItem',{todoItem,index});
			// },
			// toggleComplete(todoItem,index){
			// 	// this.$emit('toggleItem',todoItem,index);
			// 	this.$store.commit('toggleOneItem',{todoItem,index});
			// }
	},
	computed:{
		...mapGetters(['storedTodoItems']),

	} 
 

}
</script>

<style scoped>
ul{
	/* 쩜 없애는거 */
	list-style-type: none; 
	padding-left: 0px;
	margin-top: 0;
	text-align: left;
}

li{
	display: flex;
	min-height: 50px;
	height: 50px;
	line-height: 50px;
	margin: 15px;
	padding: 0 0.9rem;
	background: white;
	border-radius: 5px;
}

.removeBtn{
	margin-left: auto;
	color: #de4343;
}

.checkBtn{
	line-height: 45px;
	color: #62acde;
	margin-right: 5px;
}

.checkBtnCompleted{
	color: #b3adad;
}

.textCompleted{
	text-decoration: line-through;
	color: #b3adad;
}

/* 뷰 트랜지션 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}


</style>