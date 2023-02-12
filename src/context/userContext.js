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
  const API = "http://localhost:8000/users";

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getUsers() {
    const { data } = await axios(`${API}/${window.location.search}`);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  }

  async function getOneUser(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_USER",
      payload: res.data,
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
