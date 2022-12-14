import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/");
  //   }
  // });

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data));
    if (data.user) {
      alert("Login Succesfull");
      localStorage.setItem("user", JSON.stringify(data));
      window.location.href = "/profile";
    } else {
      alert("check your credentials");
    }
  }

  return (
    <div className="login">
      <div className="rightside">
        <div className="loginBox">
          <form onSubmit={loginUser}>
            <h1>Log-in</h1>
            <p>
              Or sign up <Link to="/signup">here</Link>
            </p>
            <br />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              style={{ width: 300 }}
            />
            <br />
            <br />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="Password"
              style={{ width: 300 }}
            />
            <br /> <br />
            {/* <Link to ="/signup" style={{ textDecoration: 'none' }}> */}
            <Button type="submit"> Log-in </Button>
          </form>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
