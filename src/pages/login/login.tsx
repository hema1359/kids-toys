import { useState } from "react";
import './login.css'
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login Successful");
  };

  return (
    <div className="login-container">

      <div className="login-box">
        <h2>Kiddokart Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            <Link to="/">
              Login
            </Link>
          </button>

        </form>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>

      </div>

    </div>
  );
}

export default Login;