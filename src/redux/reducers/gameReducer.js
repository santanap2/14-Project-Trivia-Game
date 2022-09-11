import { FAIL_FECTH, NEXT_ROUND, COUNT_ANSWERED } from '../actions';

const INITIAL_STATE = {
  error: '',
  round: 0,
  countAnswered: 0,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FAIL_FECTH:
    return {
      ...state,
      error: action.error,
    };
  case NEXT_ROUND:
    return {
      ...state,
      round: state.round + 1,
    };
  case COUNT_ANSWERED:
    return {
      ...state,
      countAnswered: state.countAnswered + 1,
    };
  default: return state;
  }
};

export default gameReducer;
