// src/components/DeletePrompt.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DeletePrompt() {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete employee ID ${id}?`)) {
      axios.delete(`http://localhost:8080/employees/${id}`)
        .then(() => {
          setEmployees(prev => prev.filter(emp => emp.id !== id));
        })
        .catch(err => console.error(err));
    }
  };

  const filteredEmployees = searchId
    ? employees.filter(emp => emp.id.toString() === searchId)
    : employees;

  return (
    <div className="container mt-4">
    <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Go Back to Home
      </button>
      <h2>Delete Employees</h2>
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
        <thead className="table-danger">
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
                  <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>
                    Delete
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

export default DeletePrompt;
