package com.example.demo.controllers;

import com.example.demo.entities.Customer;
import com.example.demo.services.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController{

    @Autowired
    private ICustomerService iCustomerService;

    @GetMapping(value = "/api/customers")
    public List<Customer> getAll(){
        return iCustomerService.getAll();
    }

    @GetMapping(value = "/api/customer/{id}")
    public Customer getById(@PathVariable String id){
        return iCustomerService.get(Long.parseLong(id));
    }

    @DeleteMapping(value = "/api/customer/{id}")
    public void remove(@PathVariable String id){
        iCustomerService.remove(Long.parseLong(id));
    }

    @PostMapping(value = "/api/customer")
    public void save(@RequestBody Customer customer){
        iCustomerService.save(customer);
    }
}
