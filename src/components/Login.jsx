import { useState } from "react";

/*
 WHY this component exists:
 - Prevents invalid login attempts
 - Improves UX with loading & error states
 - Centralizes client-side auth behavior
*/

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Improved validation with clearer feedback
  const validateForm = () => {
    if (!email.trim() || !password.trim()) {
      setError("All fields are required");
      return false;
    }

    if (!email.includes("@")) {
      setError("Email format is invalid");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Prevent unnecessary requests
    if (!validateForm()) return;

    setLoading(true);

    // Simulated API call delay
    setTimeout(() => {
      setLoading(false);

      // Demo credentials
      if (email === "test@example.com" && password === "password123") {
        setSuccess(true);
      } else {
        setError("Incorrect email or password");
      }
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Login successful</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        disabled={loading}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Authenticating..." : "Login"}
      </button>
    </form>
  );
}


