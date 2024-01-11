import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Username is => ",username)
    setUser({username, password})
    console.log(password)
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        id="password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
