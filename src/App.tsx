import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import route from "@/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {route.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
