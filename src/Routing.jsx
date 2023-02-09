import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import RegistrationPage from "./page/RegistrationPage";

const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default Routing;
