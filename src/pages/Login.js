import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const login = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter Username and Password");
      return;
    }

    // Save role for Home page
    localStorage.setItem("role", role);
    localStorage.setItem("username", username);

    // Go to Home page
    navigate("/home");
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "80px auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        boxShadow: "0px 0px 10px lightgray"
      }}
    >
      <h1>Student Attendance Management System</h1>

      <h3>Login</h3>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <br />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          width: "95%",
          padding: "10px",
          marginBottom: "20px"
        }}
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>

      <br />

      <button
        onClick={login}
        style={{
          width: "95%",
          padding: "12px",
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;