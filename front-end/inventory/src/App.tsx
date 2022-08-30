import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SharedLayout, Home, Login, Error, Favorites } from "./views";
import { Groups } from "./views/Groups";
import { ProtectedRoute } from "./views/ProtectedRoute";
import { Settings } from "./views/Settings";

function App() {
  const [user, setUser] = useState<any>(false);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
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
    </>
  );
}

export default App;
