import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import route from "@/routes";
import Logo from "./components/Logo";
import Description from "./components/Description";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Logo />
      <Description />
      <Nav />

      <Routes>
        {route.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
