import * as actionsType from "./actionsType";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case actionsType.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case actionsType.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export default postReducer;
