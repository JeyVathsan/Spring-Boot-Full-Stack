import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GetAllEmployees from "./components/GetAllEmployees";
import GetEmployeeById from "./components/GetEmployeeById";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EditPrompt from "./components/EditPrompt";
import DeleteEmployee from "./components/DeleteEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<GetAllEmployees />} />
        <Route path="/employees/search" element={<GetEmployeeById />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/edit" element={<EditPrompt />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/delete" element={<DeleteEmployee />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
