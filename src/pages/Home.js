import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  const goDashboard = () => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "teacher") {
      navigate("/teacher");
    } else {
      navigate("/student");
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        fontFamily: "Arial"
      }}
    >
      <h1>Student Attendance Management System</h1>

      <h2>Welcome, {username}</h2>

      <h3>Role: {role}</h3>

      <br />

      <button
        onClick={goDashboard}
        style={{
          padding: "12px 25px",
          marginRight: "15px",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Go to Dashboard
      </button>

      <button
        onClick={logout}
        style={{
          padding: "12px 25px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

      <br /><br />

      <h3>Project Modules</h3>

      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "auto",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr>
            <th>Module</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Login Module</td>
            <td>✔ Completed</td>
          </tr>

          <tr>
            <td>Attendance Management</td>
            <td>✔ Completed</td>
          </tr>

          <tr>
            <td>Student Portal</td>
            <td>✔ Completed</td>
          </tr>

          <tr>
            <td>Teacher Portal</td>
            <td>✔ Completed</td>
          </tr>

          <tr>
            <td>Admin Portal</td>
            <td>✔ Completed</td>
          </tr>

          <tr>
            <td>Dashboard Module</td>
            <td>✔ Completed</td>
          </tr>

          <tr>
            <td>Report Generation</td>
            <td>✔ Completed</td>
          </tr>

          <tr>
            <td>Low Attendance Alert</td>
            <td>✔ Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;