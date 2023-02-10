import React from "react";
import UsersList from "../components/UsersList";

const UsersPage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <UsersList />
      </div>
    </div>
  )
};

export default UsersPage;