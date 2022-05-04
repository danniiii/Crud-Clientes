package com.example.demo.services;

import com.example.demo.entities.Customer;
import com.example.demo.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAll(){
        return (List<Customer>)customerRepository.findAll();
    }

    @Override
    public Customer get(Long id) {
        return (Customer) customerRepository.findById(id).get();
    }

    @Override
    public void remove(Long id){
        customerRepository.deleteById(id);
    }

    @Override
    public void save(Customer customer){
        customerRepository.save(customer);
    }
}
