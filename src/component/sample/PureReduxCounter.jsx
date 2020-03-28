import React from "react";
import {createStore} from "redux";

// define constants
const ADD_NUMBER = "add_number";
const REDUCE_NUMBER = "reduce_number";

// reducer
const initialState = {
  count: 0,
};

function countReducer(state = initialState, actions) {
  switch (actions.type) {
    case ADD_NUMBER:
      return {
        ...state,
        count: state.count + parseInt(actions.number, 1),
      }; // 修改state的方法是创建一个新的state，不可变数据
    case REDUCE_NUMBER:
      return {
        ...state,
        count: state.count - parseInt(actions.number, 1),
      };
    default:
      return state;
  }
}

// action
function addNumber(number) {
  return {
    type: ADD_NUMBER,
    number,
  };
}

function reduceNumber(number) {
  return {
    type: REDUCE_NUMBER,
    number,
  };
}

// store
const store = createStore(countReducer);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      number: 4,
    };
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState());
      this.setState({
        count: store.getState().count,
      });
    });
  }

  onChangeNumber(event) {
    this.setState({
      number: event.target.value,
    });
  }

  render() {
    const {count, number} = this.state;
    return (
      <div>
        <p>
          the current result is:&nbsp;&nbsp;
          {count}
        </p>
        <input type="text" value={number} onChange={this.onChangeNumber} />
        <input
          type="button"
          onClick={() => {
            store.dispatch(addNumber(number));
          }}
          value="+"
        />
        <input
          type="button"
          onClick={() => {
            store.dispatch(reduceNumber(number));
          }}
          value="-"
        />
      </div>
    );
  }
}

export default Counter;
