import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetEmployeeById() {
  const [searchId, setSearchId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchId) return;
    axios
      .get(`http://localhost:8080/employees/${searchId}`)
      .then((res) => {
        setEmployee(res.data);
        setError("");
      })
      .catch(() => {
        setEmployee(null);
        setError("No employee found with that ID");
      });
  };

  const handleClear = () => {
    setSearchId("");
    setEmployee(null);
    setError("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Search Employee by ID</h2>

      <div className="row mb-4 justify-content-center">
        <div className="col-md-4 mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Employee ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
        </div>

        <div className="col-auto">
          <button className="btn btn-primary me-2" onClick={handleSearch}>
            Search
          </button>
          <button className="btn btn-secondary me-2" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-outline-dark" onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      </div>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {employee && (
        <div className="table-responsive">
          <table className="table table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th><th>Name</th><th>Email</th><th>Phone</th>
                <th>Department</th><th>Gender</th><th>Salary</th><th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>{employee.gender}</td>
                <td>{employee.salary}</td>
                <td>{employee.age}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default GetEmployeeById;
