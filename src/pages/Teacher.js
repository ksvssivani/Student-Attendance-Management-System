import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Teacher() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (id, value) => {
    setAttendance({
      ...attendance,
      [id]: value,
    });
  };

  const saveAttendance = async () => {
    try {
      for (let id in attendance) {
        await API.post("/attendance", {
          studentId: id,
          status: attendance[id],
        });
      }

      alert("Attendance Saved Successfully");
    } catch (err) {
      console.log(err);
      alert("Error Saving Attendance");
    }
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Teacher Dashboard</h1>

      <h2>Attendance Management</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll No</th>
            <th>Attendance</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>
                <select
                  onChange={(e) =>
                    handleChange(student._id, e.target.value)
                  }
                >
                  <option value="">Select</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button onClick={saveAttendance}>Save Attendance</button>

      <button
        onClick={logout}
        style={{ marginLeft: "15px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Teacher;