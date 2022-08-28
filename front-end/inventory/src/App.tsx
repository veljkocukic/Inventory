import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './views';
import { Error } from './views/Error';
import { Login } from './views/Login';
import { SharedLayout } from './views/SharedLayout';

function App() {
  return (
    <>
    <Router>
      <Routes>
    <Route path='/' element={<SharedLayout />}>
    <Route index element={<Home />} />

    <Route path='login' element={<Login />} />
    <Route path="*" element={<Error />} />

    </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
