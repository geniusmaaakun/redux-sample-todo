//index.js
import React from "react";
import ReactDOM from "react-dom";
//このアプリのstateを管理するstoreを作成するためcreateStoreをインポートする
import { createStore } from "redux";
//このアプリのstateを各コンポーネント間で共有するためProviderをインポートする
import { Provider } from "react-redux";
//作成したReducerのインポート
import todoReducer from "./reducers/todoReducer";
//Appのインポート
import App from "./App";
//createStoreでstoreを作成。引数にReducerを渡す。
//第２引数はブラウザでRedux-devtoolを利用するための記述
const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//Providerに作成したstoreを渡しAppを囲むことでstateの共有準備完了
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
