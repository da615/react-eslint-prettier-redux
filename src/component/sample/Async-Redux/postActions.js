import axios from "axios";
import * as actionsType from "./actionsType";

function requestPosts() {
  return {
    type: actionsType.REQUEST_POSTS,
  };
}

function receivePosts(json) {
  return {
    type: actionsType.RECEIVE_POSTS,
    items: json.data,
    receivedAt: Date.now(),
  };
}

// 来看一下我们写的第一个 thunk action 创建函数！
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts() {
  return function(dispatch) {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    dispatch(requestPosts()); // display the loading status
    const axiosConfig = {
      withCredentials: true,
    };
    return axios
      .get("http://localhost:8080/getUserInfo", axiosConfig)
      .then(response => {
        console.log(response);
        dispatch(receivePosts(response.data));
      })
      .catch(err => {
        console.log("An error occurred.", err);
      });
  };
}
