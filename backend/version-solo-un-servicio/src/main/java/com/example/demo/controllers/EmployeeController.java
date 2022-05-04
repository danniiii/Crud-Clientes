package com.example.demo.controllers;

import com.example.demo.entities.Employee;
import com.example.demo.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private IEmployeeService iEmployeeService;

    @GetMapping(value = "/api/employees")
    public List<Employee> getAll(){
        return iEmployeeService.getAll();
    }

    @GetMapping(value = "/api/employee/{id}")
    public Employee getById(@PathVariable String id){
        return iEmployeeService.get(Long.parseLong(id));
    }

    @DeleteMapping(value = "/api/employee/{id}")
    public void remove(@PathVariable String id){
        iEmployeeService.remove(Long.parseLong(id));
    }

    @PostMapping(value = "/api/employee")
    public void save(@RequestBody Employee employee){
        iEmployeeService.save(employee);
    }
}
