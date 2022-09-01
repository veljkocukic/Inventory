import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Slide, ToastContainer, Zoom } from "react-toastify";
import { Loading } from "./components/Loading";
import { SharedLayout, Home, Login, Error, Favorites } from "./views";
import { Groups } from "./views/Groups";
import { ProtectedRoute } from "./views/ProtectedRoute";
import { Settings } from "./views/Settings";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Loading />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="groups" element={<Groups />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="settings" element={<Settings />} />

            <Route path="*" element={<Error />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme={"dark"}
        hideProgressBar={false}
        newestOnTop={false}
        limit={2}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        style={{ borderColor: "red" }}
        transition={Slide}
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
