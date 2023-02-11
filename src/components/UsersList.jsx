import React, { useContext, useEffect } from "react";
import Cards from "./Cards";
import Pagination from "../components/Pagination";
import { userContext } from "../context/userContext";

const UserList = ({ page, setPage }) => {
  const { users, getUsers } = useContext(userContext);

  useEffect(() => {
    getUsers();
  }, []);

  const itemsOnPage = 9;

  const count = Math.ceil(users.length / itemsOnPage);

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return users.slice(begin, end);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-wrap justify-content-center min-vh-100">
        {currentData().map(item => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
      <Pagination count={count} page={page} setPage={setPage} />
    </div>
  );
};

export default UserList;
