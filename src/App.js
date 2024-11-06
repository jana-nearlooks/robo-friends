import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/userlist/UserList";
import UserDescription from "./components/userdescription/UserDescription";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDescription />} />
    </Routes>
  </Router>
);

export default App;
