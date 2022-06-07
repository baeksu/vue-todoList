<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> 얘는 이제 필요 없어진다. -->
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
  
}
</script>

<style>
/* 여기 scoped 를 안해놨기 때문에 cascade 되면서 하위 컴포넌트까지 적용이 된다. */
body{
  text-align: center;
  background-color: #f6f6f6;
}

input{
  border-style: groove;
  width: 200px;
}
button{
  border-style:groove;
}
/* .shadow : input값이나 이런곳에 그림자 효과를 준다고 한다. */
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03); 
}



</style>
