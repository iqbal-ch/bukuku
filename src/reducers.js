import { combineReducers } from 'redux';
import {
  SET_FETCHING,
  SET_USER,
  DELETE_USER,
  FETCH_PRODUCTS
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

const initialStateProduk = {
  items: [],
}

function Produk (state = initialStateProduk, action){
  switch(action.type){
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}

const initialStateCart = {
  cart: [],
  total: 0
}

function Cart (state = initialStateCart, action){
  switch(action.type){
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}

const loginApp = combineReducers({
  user,
  isFetching,
  Produk,
  Cart
});

export default loginApp;