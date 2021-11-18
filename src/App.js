//App.js
//ReduxのstateとReactコンポーネントを紐づけるためにconnectをインポート
import { connect } from "react-redux";
//作成したActionをインポート
import { addTodo, deleteTodo, changeText } from "./actions/todoActions";
//Appコンポーネントを定義
//後段で「mapStateToProps」「mapDispatchToProps」「connect」によりstoreと紐づけているため、
//props.〇〇の形でこのアプリのstoreにアクセスできる。
function App(props) {
  //Todo追加用の関数
  function clickAddTodo() {
    props.addTodo(props.text);
  }
  //Todo削除用の関数
  function clickDeleteTodo(id) {
    props.deleteTodo(id);
  }
  //inputの変更時にstoreにstate変更を要求するためのActionを発行する関数
  function changeInputText(e) {
    props.changeText(e.target.value);
  }
  return (
    <div className="App">
      <input
        type="text"
        value={props.text}
        onChange={(e) => changeInputText(e)}
      />
      <button onClick={() => clickAddTodo()}>Add</button>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id} {todo.text}
              <button onClick={() => clickDeleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
//このアプリのstateをこのコンポーネントのpropsとして利用できるようにマッピングする関数
//（connectの第一引数）
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    text: state.text
  };
};
//このアプリのstateをこのコンポーネントから変更要求出来るようにするためにActionと紐づけを行う関数
//（connectの第二引数）
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    //↑↑結果的にはAppコンポーネントの中でprops.addTodoの形で利用することができ、
    //実行された際は、storeのdispatch関数の引数にActionオブジェクトが入り、
    //dispatch({ type: "ADD_TODO", id: count++, text })となる。※todoActions.js参照
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    changeText: (text) => dispatch(changeText(text))
  };
};
//storeと紐づけをするためにApp本体ではなく、connect関数をエクスポートする
export default connect(mapStateToProps, mapDispatchToProps)(App);
//このコンポーネントがstateの書き換えを必要としない場合（storeの状態を見るだけの場合）は、第二引数は省略可
//例) export default connect(mapStateToProps)(App);
//このコンポーネントがstateの書き換えのみを行う場合（storeにActionを発行するだけの場合）は、第一引数にnullを渡す
//例) export default connect(null, mapDispatchToProps)(App);
