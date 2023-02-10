import React from "react";
import Cards from "./Cards";
import Pagination from "../components/Pagination";

const UserList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Pagination />
    </div>
  )
};

export default UserList;