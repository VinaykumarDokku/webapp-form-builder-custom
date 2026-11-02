import React, { useState } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email)) {
      setError("Please enter a valid email address.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Email Validation</h3>

      <input
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setError("");
          setSuccess(false);
        }}
        placeholder="Enter your email"
      />

      <button type="submit">Validate</button>

      {error && <p role="alert">{error}</p>}
      {success && <p>Email validated successfully!</p>}
    </form>
  );
}
