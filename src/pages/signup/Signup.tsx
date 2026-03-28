import { useState } from "react";
import './signup.css'
import { Link } from "react-router-dom";


function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Account Created Successfully!");
  };

  return (
    <div className="signup-container">

      <div className="signup-box">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            <Link to="/">
              Sign Up
            </Link>
            </button>

        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>

      </div>

    </div>
  );
}

export default Signup;