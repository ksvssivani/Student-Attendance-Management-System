import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Admin() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    rollNo: "",
    className: ""
  });

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  const fetchTeachers = async () => {
    const res = await API.get("/teachers");
    setTeachers(res.data);
  };

  useEffect(() => {
    fetchStudents();
    fetchTeachers();
  }, []);

  const addStudent = async () => {
    try {
      const res = await API.post("/students", form);
      alert("Student added successfully!");
      setForm({ name: "", rollNo: "", className: "" });
      fetchStudents();
    } catch (err) {
      console.log(err.response?.data);
      alert("Error adding student.");
    }
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Admin Dashboard</h1>

      <h2>Add Student</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <br /><br />

      <input
        placeholder="Roll No"
        value={form.rollNo}
        onChange={(e) =>
          setForm({ ...form, rollNo: e.target.value })
        }
      />

      <br /><br />

      <input
        placeholder="Class"
        value={form.className}
        onChange={(e) =>
          setForm({ ...form, className: e.target.value })
        }
      />

      <br /><br />

      <button onClick={addStudent}>
        Add Student
      </button>

      <hr />

      <h2>Student List</h2>

      <table border="1" cellPadding="10">

        <thead>

        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Class</th>
        </tr>

        </thead>

        <tbody>

        {students.map((student) => (

          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.rollNo}</td>
            <td>{student.className}</td>
          </tr>

        ))}

        </tbody>

      </table>

      <hr />

      <h2>Teacher List</h2>

      <table border="1" cellPadding="10">

        <thead>

        <tr>
          <th>Name</th>
          <th>Subject</th>
        </tr>

        </thead>

        <tbody>

        {teachers.map((teacher) => (

          <tr key={teacher._id}>
            <td>{teacher.name}</td>
            <td>{teacher.subject}</td>
          </tr>

        ))}

        </tbody>

      </table>

      <br />

      <button onClick={() => navigate("/")}>
        Logout
      </button>

    </div>
  );
}

export default Admin;