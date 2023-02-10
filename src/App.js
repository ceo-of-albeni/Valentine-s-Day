import React from "react";
// import Routing from "./Routing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import UsersPage from "./page/UsersPage";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routing /> */}
      <UsersPage/>
      
      <Footer />
    </div>
  );
};

export default App;
