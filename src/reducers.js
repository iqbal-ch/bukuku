import { combineReducers } from 'redux';
import {
  SET_FETCHING,
  SET_USER,
  DELETE_USER
} from './actions';

const initialState = {
  isAuth: false,
  user: []
}

function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuth: true,
        user: action.user
      }
    case DELETE_USER:
      return initialState;
    default:
      return state;
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case SET_FETCHING: return action.state;
    default: return state;
  }
}

const loginApp = combineReducers({
  user,
  isFetching
});

export default loginApp;