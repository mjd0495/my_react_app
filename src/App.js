import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Todo from "./Components/Todo";
import Tabs from "./Components/Tabs";

const App = () => {
  return (
    <div>
      <div className="main d-flex">
        <Sidebar />
        <div className="mainContainer">
          <Navbar />
          <Tabs />
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default App;
