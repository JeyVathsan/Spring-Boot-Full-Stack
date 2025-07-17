import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./GetAllEmployees.css";

function GetAllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/employees")
      .then((res) => setEmployees(res.data))
      .catch(() => setError("Error fetching employee data"));
  }, []);

  return (
    <div className="container">
      <div className="buttonContainer">
        <button className="btn btn-outline-dark" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
      <h2>All Employees</h2>
      {error && <p className="error">{error}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Age</th>
            {/* <th>Edit</th>  */}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.department}</td>
              <td>{emp.gender}</td>
              <td>{emp.salary}</td>
              <td>{emp.age}</td>
       
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetAllEmployees;
