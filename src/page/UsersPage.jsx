import React, { useState, useEffect, useContext } from "react";
import UsersList from "../components/UsersList";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { userContext } from "../context/userContext";

const UsersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { getUsers } = useContext(userContext);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getUsers();
  }, [searchParams]);

  return (
    <div className="d-flex flex-column align-items-center">
      <Form className="d-flex mt-4">
        <Form.Control
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{ color: "palevioletred" }}
        />
        <div className="box-3">
          <div className="btn btn-three">
            <span style={{ color: "palevioletred" }}>Search</span>
          </div>
        </div>
      </Form>
      <UsersList />
    </div>
  );
};

export default UsersPage;
