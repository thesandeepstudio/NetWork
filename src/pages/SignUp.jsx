import React from "react";
import "../styles/SignUp.css";

const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        form.reset();
        // Optional: redirect to sign-in page
        // window.location.href = "/sign_in";
      } else {
        alert(result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <div className="logo-text">Network</div>
      <h2>Create your account</h2>
      <form id="signupForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>
      <div className="login-link">
        Already have an account? <a href="/sign_in">Sign in</a>
      </div>
    </div>
  );
};

export default SignUp;
