import React from "react";
import PizzaList from "./Components/PizzaList";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Cart from "./Components/Cart";
import Users from "./Components/Users";
import UpdateProfile from "./Components/UpdateProfile";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<PizzaList />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Profile" element={<UpdateProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
