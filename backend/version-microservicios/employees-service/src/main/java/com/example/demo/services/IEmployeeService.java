package com.example.demo.services;

import com.example.demo.entities.Employee;

import java.util.List;

public interface IEmployeeService {

    List<Employee> getAll();

    Employee get(Long parseLong);

    void remove(Long id);

    void save(Employee employee);
}
