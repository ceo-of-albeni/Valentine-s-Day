import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../context/userContext";

const ProfilePage = () => {
  const { getOneUser, oneUser } = useContext(userContext);

  const params = useParams();

  useEffect(() => {
    getOneUser(params.id);
  }, []);

  return oneUser ? (
    <div>
      <h1>{oneUser.name}</h1>
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default ProfilePage;
