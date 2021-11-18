//todoReducer.js
//storeから現在のstateとコンポーネントから発行されたActionオブジェクトを受け取り、
//新しいstateをstoreにreturnすることでstateを変更する関数。
//※index.jsでStoreを作成する際の引数になる
//stateの初期値を定義
//（todoリスト格納用の配列と、インプットテキストのvalue管理用）
const initState = { todos: [], text: "" };
//Reducerを作成
//初期値にinitStateを渡し、
//stateとactionを引数にとる形でstoreから利用できるように関数を作成する。
//注１※戻り値はイミュータブルな値でreturnする。
//（注１ stateがオブジェクトや配列の場合、元のstateを書き換えずに新しいデータを返す。）
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text
          }
        ]
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.id)
      };
    case "CHANGE_TEXT":
      return {
        ...state,
        todos: [...state.todos],
        text: action.text
      };
    default:
      return state;
  }
};
//Reducerをエクスポート
export default todoReducer;
