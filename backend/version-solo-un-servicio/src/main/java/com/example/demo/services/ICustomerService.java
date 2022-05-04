package com.example.demo.services;

import com.example.demo.entities.Customer;

import java.util.List;

public interface ICustomerService {

     List<Customer> getAll();

     Customer get(Long parseLong);

     void remove(Long id);

     void save(Customer customer);
}
