import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditPrompt() {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState(""); // ✅ added state
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  // ✅ filter employees if searchId is not empty
  const filteredEmployees = searchId
    ? employees.filter(emp => emp.id.toString() === searchId)
    : employees;

  return (
    <div className="container mt-4">
    <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Go Back to Home
      </button>
      <h2>Edit Employees</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
           <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>{emp.phone}</td>
                <td>{emp.gender}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleEdit(emp.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No matching employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EditPrompt;
