// src/components/EditEmployee.jsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
  name: "",
  email: "",
  age: "",
  gender: "",
  phone: "",
  salary: "",
  department: "",
});


  useEffect(() => {
    axios
      .get(`http://localhost:8080/employees/${id}`)
      .then((res) => setEmployee(res.data));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

const handleUpdate = (e) => {
  e.preventDefault();
  axios
    .put(`http://localhost:8080/employees/${id}`, employee)
    .then(() => navigate("/employees")); // ✅ this is the right place
};

  return (
    <div className="container mt-4">
      
      <h2>Edit Employee</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={employee.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <input
            className="form-control"
            name="gender"
            value={employee.gender}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Salary</label>
          <input
            type="number"
            className="form-control"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Department</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={employee.department}
            onChange={handleChange}
          />
        </div>
       <button type="submit" className="btn btn-success">Update</button>

      </form>
    </div>
  );
}

export default EditEmployee;
