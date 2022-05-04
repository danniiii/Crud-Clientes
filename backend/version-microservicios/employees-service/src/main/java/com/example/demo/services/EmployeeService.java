package com.example.demo.services;

import com.example.demo.entities.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAll(){
        return (List<Employee>)employeeRepository.findAll();
    }

    @Override
    public Employee get(Long id) {
        return (Employee) employeeRepository.findById(id).get();
    }

    @Override
    public void remove(Long id){
        employeeRepository.deleteById(id);
    }

    @Override
    public void save(Employee employee){
        employeeRepository.save(employee);
    }
}
