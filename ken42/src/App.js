import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Events } from "./Components/Events";

import "./App.css";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/event"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Events />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
