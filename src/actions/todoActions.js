//todoActions.js
//※以下のAction関数は、Actionを利用するコンポーネントで読み込まれ、
//「mapDispatchToProps」と「connect」を利用して最終的にReducerと紐づけられる。
//今回はidのカウント用変数を用意
let count = 0;
//以下今回使用するActionたち。。
export function addTodo(text) {
  return { type: "ADD_TODO", id: count++, text };
}
export function deleteTodo(id) {
  return { type: "DELETE_TODO", id: id };
}
export function changeText(text) {
  return { type: "CHANGE_TEXT", text };
}