import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  console.log("Home component loaded");

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">Welcome to the Employee Directory</h1>
      <p className="lead mb-4">
        This app lets you manage employees using React and Spring Boot.
      </p>

      <div className="d-grid gap-3 col-6 mx-auto">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/employees")}
        >
          Get All Employees
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/employees/search")}
        >
          Search by ID
        </button>

        <button
          className="btn btn-success"
          onClick={() => navigate("/employees/add")}
        >
          Add New Employee
        </button>

        <button
          className="btn btn-warning"
          onClick={() => navigate("/edit")}
        >
          Edit Employee
        </button>

        <button
          className="btn btn-danger"
          onClick={() => navigate("/delete")}
        >
          Delete Employees
        </button>
      </div>
    </div>
  );
}

export default Home;
