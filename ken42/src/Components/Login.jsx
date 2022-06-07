import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../Redux/Login/action";
import { NavBar } from "./NavBar";
import "../Styles/Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);

  const handleSubmit = () => {
    const payload = {
      username,
      password,
    };
    if (username === "" || password === "") {
      alert("Please fill all details");
    } else {
      dispatch(login(payload));
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <NavBar />
      <div className="login-form">
        <label>Username: </label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};
