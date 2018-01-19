import {FETCH_POSTS} from '../action/index';

const INITIAL_STATE = {all : [], post: null};

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_POSTS:
    console.log("function is called");
      return { ...state, all: action.payload.data};
    default:
      return state;
  }
}
