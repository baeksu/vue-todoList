<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
    </span>
    <!-- 모달창 -->
    <AlertModal v-if="showModal" @close="showModal = false">
    <!--
    you can use custom content here to overwrite
    default content-->
    <h3 slot="header">
        경고!!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
    </h3>

    <div slot="body">
        null은 저장할 수 없습니다!!
    </div>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue';

export default {
    data(){
        return { 
            newTodoItem: "",
            showModal:false,
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ''){
                // this.$emit('addTodoItem',this.newTodoItem)
                //이제 추가할 때 emit 을 발생시키는게 아니라 sotre 로 commit 을 날릴거다. 
                this.$store.commit('addOneItem',this.newTodoItem);
                this.clearInput();
            }else{
                // alert('할일을 입력해주세요');
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            //입력 박스 초기화
            this.newTodoItem='';
        }
    },
    components:{
        AlertModal,
    }
}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478f8 , #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}
.closeModalBtn{
    color: #42b983;
}
</style>