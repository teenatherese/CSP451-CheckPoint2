import { useState } from "react";

/*
 WHY this component exists:
 - Centralizes login logic
 - Prevents invalid form submission
 - Improves UX with real-time feedback
*/

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Basic client-side validation
  const validateForm = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return false;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Prevents unnecessary API calls
    if (!validateForm()) return;

    setLoading(true);

    // Simulated authentication request
    setTimeout(() => {
      setLoading(false);

      // Fake auth logic for demo purposes
      if (email === "test@example.com" && password === "password123") {
        alert("Login successful");
      } else {
        setError("Invalid credentials");
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

