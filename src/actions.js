import Axios from "axios";

// Product Page
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

//User and Auth
export const SET_FETCHING = 'SET_FETCHING';
export const SET_USER = 'SET_USER';
export const DELETE_USER = 'DELETE_USER';

//Cart
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_CART = 'REMOVE_CART';


export function setFetching(v) {
  return { type: SET_FETCHING, state: v };
}

export function setUser(user) {
  return { type: SET_USER, user };
}

export function deleteUser() {
  localStorage.removeItem("user");
  return { type: DELETE_USER };
}

export function setProduk(produk) {
    return {  type: FETCH_PRODUCTS, payload: produk };
}

export function actionTryLogin(values) {
    console.log(values)
    return dispatch => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
          };
        dispatch(setFetching(true));
        Axios.post('http://bukuku.codepanda.id/users/login', {
            email: values.email,
            password: values.password
        },axiosConfig)
        .then(data => {
        const user = data.data;
        if (user !== null) {
            dispatch(setUser(user));
            localStorage.setItem("user",JSON.stringify(user));
        }
        dispatch(setFetching(false));
        })
        .catch(err => {
        dispatch(setFetching(false));
        });
    };
}

export function actionTryRegister(values) {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
      };
    return dispatch => {
        dispatch(setFetching(true));
        Axios.post('http://bukuku.codepanda.id/users/signup', {
            email: values.email,
            password: values.password,
            name: values.name,
            phone_number: values.phone_number
        },axiosConfig)
        .then(res => {
        const message = res.message;
        alert('Succes Register, Please Login !')
        dispatch(setFetching(false));
        })
        .catch(err => {
        console.log(err)
        dispatch(setFetching(false));
        });
    };
}

export function fetchProducts (callback) {
    return dispatch => {
    let user = localStorage.getItem("user")
    user = JSON.parse(user)
    Axios.get('http://bukuku.codepanda.id/barangs/').then(res => {
        let products = res.data["barangs"]
        console.log(products)
        dispatch(setProduk(products));
        if(!!callback) {
            callback();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}