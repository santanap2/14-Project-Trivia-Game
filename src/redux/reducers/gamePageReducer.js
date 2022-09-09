import { FAIL_FECTH } from '../actions';

const INITIAL_STATE = {
  error: '',
};

const gamePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FAIL_FECTH:
    return {
      ...state,
      error: action.error,
    };
  default: return state;
  }
};

export default gamePageReducer;
