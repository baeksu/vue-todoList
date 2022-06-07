const addOneItem = (state, todoItem)=>{
  //es6를 적용하면서 const로 바꿔주자, let 을 써도 되지만 재할당이 안되는 const 가 디버깅하기 더 좋다.
  const obj = {completed: false, item: todoItem}
  localStorage.setItem(todoItem,JSON.stringify(obj));//객체를 json을 string 으로 쭉 넣어주는듯
  state.todoItems.push(obj);
};

const removeOneItem = (state,payload)=>{
  //payload = {todoItem, index} 처럼 객체로 넘겨도 된다.
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index,1);
};

const toggleOneItem = (state,payload) => {
  //로컬 스토리지 데이터 갱신
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; 

  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));

};

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems=[];
};

export {addOneItem,removeOneItem,toggleOneItem,clearAllItems};