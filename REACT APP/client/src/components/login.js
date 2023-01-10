import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:3001/login", user).then((res) => {
      setLoginUser(res.data.user);
      console.log("send");
      navigate("/");
    });
  };

  return (
    <body>
      <div className="container">
      <div className="login-card">
        <h1>Login</h1>
        <h3>Enter your credentials</h3>
        <p>
          Don't have an account? 
          <a href="/signup"> Create account </a>
           it takes less than a minute
        </p>
        <div className="login-form">
          <p><input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
          ></input></p>
          <p><input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          ></input></p>
          <p><a href="/signup">forgot password?</a></p>
          <p><button className="button" onClick={login}>
            LOGIN
          </button></p>
        </div>
      </div>
      </div>
    </body>
  );
};

export default Login;