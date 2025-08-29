import React, { useState } from "react";
import "../styles/SignIn.css"; // Import your old CSS
import { useNavigate } from "react-router-dom";

// ============================
// TEMP MASTER LOGIN DATA
// Remove this after backend development
// ============================
const masterUser = {
  email: "master@gmail.com",
  password: "admin",
  name: "Master User",
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ============================
    // FRONTEND ONLY LOGIN (TEMP)
    // Remove this block after backend is ready
    // ============================
    if (email === masterUser.email && password === masterUser.password) {
      localStorage.setItem("currentUser", JSON.stringify(masterUser));
      navigate("/");
      return;
    }

    // ============================
    // ORIGINAL BACKEND LOGIN CODE
    // Keep this for future backend integration
    // ============================
    const formData = { email, password };

    try {
      const response = await fetch("/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setEmail("");
        setPassword("");
        localStorage.setItem("token", result.token); // optional
        window.location.href = "/"; // redirect to home
      } else {
        alert(result.error); // show error from backend
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <div className="logo-text">Network</div>
      <h2>Sign in to your account</h2>
      <form id="signinForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="btn-primary">
          Sign In
        </button>
      </form>
      <div className="signup-prompt">
        <p>
          Don't have an account?{" "}
          <a href="/sign_up" className="signup-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
