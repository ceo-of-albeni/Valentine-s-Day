import React, { useReducer } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const userContext = React.createContext();

const INIT_STATE = {
  users: [],
  oneUser: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_ONE_USER":
      return { ...state, oneUser: action.payload };
    default:
      return state;
  }
}

const UserContextProvider = ({ children }) => {
  const API = "http://localhost/fatFreeTest/public";

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  
  // async function getUsers() {
  //   const { data } = await fetch(`${API}/users`); //${window.location.search}
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // }

  // async function getUsers() {
  //   try {
  //     const res = await axios(`${API}/users/${window.location.search}`);
  //     dispatch({
  //       type: "GET_USERS",
  //       payload: res.data,
  //     });
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  async function getUsers () {
    // return async function (dispatch) {
        const response = await fetch(`${API}/users_heart`)
        const data = await response.json()
        dispatch({
          type: "GET_USERS",
          payload: data
        })
    // }
}

  async function getOneUser(name) {
    let res = await fetch(`${API}/${name}`);
    const data = await res.json()
    dispatch({
      type: "GET_ONE_USER",
      payload: data,
    });
  }

  return (
    <userContext.Provider
      value={{
        users: state.users,
        oneUser: state.oneUser,

        getUsers,
        getOneUser,
      }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
