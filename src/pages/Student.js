import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Student() {
  const [attendance, setAttendance] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    const res = await API.get("/attendance");
    setAttendance(res.data);
  };

  const total = attendance.length;
  const present = attendance.filter(
    (a) => a.status === "Present"
  ).length;

  const percentage =
    total === 0 ? 0 : ((present / total) * 100).toFixed(2);

  return (
    <div style={{ padding: 20 }}>
      <h1>Student Dashboard</h1>

      <h2>Attendance Percentage : {percentage}%</h2>

      {percentage < 75 ? (
        <h3 style={{ color: "red" }}>
          ⚠ Low Attendance Alert
        </h3>
      ) : (
        <h3 style={{ color: "green" }}>
          Attendance is Good
        </h3>
      )}

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Student</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((item) => (
            <tr key={item._id}>
              <td>{item.studentId?.name}</td>
              <td>{item.status}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default Student;