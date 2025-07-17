package com.example.demo.controller;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repo;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable int id) {
        return repo.findById(id)
                   .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));
    }
    
    
    @PostMapping
    public Employee addEmployee(@RequestBody Employee emp) {
        return repo.save(emp);
    }
    
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable int id, @RequestBody Employee newData) {
        return repo.findById(id)
                .map(emp -> {
                    emp.setName(newData.getName());
                    emp.setAge(newData.getAge());
                    emp.setSalary(newData.getSalary());
                    emp.setAge(newData.getAge());
                    emp.setDepartment(newData.getDepartment());
                    emp.setEmail(newData.getEmail());
                    emp.setPhone(newData.getPhone());
                    
                    return repo.save(emp);
                })
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));
    }
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return "Employee with ID " + id + " deleted successfully.";
        } else {
            throw new RuntimeException("Employee not found with ID: " + id);
        }
    }

    
}
