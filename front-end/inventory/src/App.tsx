import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SharedLayout, Home, Login, Error } from "./views";
import { Favorites } from "./views/Favorites/Favorites";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route path="favorites" element={<Favorites />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
