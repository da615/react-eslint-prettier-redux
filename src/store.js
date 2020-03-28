import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import countReducer from "./component/sample/React-redux/counterReducer";
import postReducer from "./component/sample/Async-Redux/postReducer";
import {combineReducers} from "redux";

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    counter: countReducer,
    post: postReducer,
  }),
  applyMiddleware(
    thunkMiddleware, // 拦截异步的action
    loggerMiddleware // 用来打印 action 日志
  )
);

export default store;
