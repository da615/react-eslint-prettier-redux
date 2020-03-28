import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import store from "./store.js";
import UserListComponent from "./component/sample/Async-Redux/UserListComponent.jsx";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserListComponent />
      </div>
    </Provider>
  );
}

export default App;
