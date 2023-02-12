import React, { useState, useEffect, useContext } from "react";
import UsersList from "../components/UsersList";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { userContext } from "../context/userContext";

const UsersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { getUsers } = useContext(userContext);
  const [page, setPage] = useState(1);

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
      <h1 className="mt-5">Who are you looking for?</h1>
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
      <UsersList page={page} setPage={setPage} />
    </div>
  );
};

export default UsersPage;
