import {ADD_NUMBER, REDUCE_NUMBER} from "./actionsType";

const initialState = {
  count: 0,
};

function countReducer(state = initialState, actions) {
  switch (actions.type) {
    case ADD_NUMBER:
      return {
        ...state,
        count: state.count + parseInt(actions.number, 10),
      }; // 修改state的方法是创建一个新的state，不可变数据
    case REDUCE_NUMBER:
      return {
        ...state,
        count: state.count - parseInt(actions.number, 10),
      };
    default:
      return state;
  }
}

export default countReducer;
