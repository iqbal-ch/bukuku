import Axios from "axios";

export const SET_FETCHING = 'SET_FETCHING';
export const SET_USER = 'SET_USER';
export const DELETE_USER = 'DELETE_USER';

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
        console.log(user)
        if (user !== null) {
            dispatch(setUser(user));
            localStorage.setItem("user", JSON.stringify(user));
        }
        dispatch(setFetching(false));
        })
        .catch(err => {
        dispatch(setFetching(false));
        });
    };
}

export function actionTryRegister(values) {
    return dispatch => {
        dispatch(setFetching(true));
        Axios.post('bukuku.codepanda.id/users/signup', {
            email: values.email,
            password: values.password,
            name: values.name,
            phone_number: values.phone_number
        })
        .then(res => {
        const message = res.message;
        console.log(message)
        dispatch(setFetching(false));
        })
        .catch(err => {
        console.log(err)
        dispatch(setFetching(false));
        });
    };
}