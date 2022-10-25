import * as ActionTypes from "./ActionTypes";

const initial_state = {
  counter: 20,
};

const ReducerCounter = (state = initial_state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ActionTypes.INCREMENT:
      newState.counter = newState.counter + action.payload;
      break;
    case ActionTypes.DECREMENT:
      newState.counter = newState.counter - action.payload;
      break;
    case ActionTypes.INITIALIER:
      newState.counter = 0;
      break;
  }

  return newState;
};


export default ReducerCounter;