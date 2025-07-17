import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const nav = useNavigate();

  const [emp, setEmp] = useState({
    name: "",
    email: "",
    salary: "",
    department: "",
    phone: "",
    gender: "",
    age: "",
  });

  const handleChange = (e) =>
    setEmp({ ...emp, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/employees", emp);
      alert("Employee added ✅");
      nav("/employees");
    } catch (err) {
      console.error(err);
      alert("Failed to add employee ❌");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <input
                  name="name"
                  className="form-control"
                  value={emp.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={emp.email}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>Salary</th>
              <td>
                <input
                  name="salary"
                  type="number"
                  className="form-control"
                  value={emp.salary}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>Department</th>
              <td>
                <input
                  name="department"
                  className="form-control"
                  value={emp.department}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <input
                  name="phone"
                  type="text"
                  className="form-control"
                  value={emp.phone}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Age</th>
              <td>
                <input
                  name="age"
                  type="number"
                  className="form-control"
                  value={emp.age}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
                <input
                  name="gender"
                  className="form-control"
                  value={emp.gender}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success me-2">Save</button>
        <button className="btn btn-secondary" onClick={() => nav("/")}>
          Go Back to Home
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
