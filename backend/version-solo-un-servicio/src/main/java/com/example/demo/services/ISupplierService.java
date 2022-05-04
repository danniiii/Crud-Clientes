package com.example.demo.services;

import com.example.demo.entities.Supplier;

import java.util.List;

public interface ISupplierService {

    List<Supplier> getAll();

    Supplier get(Long parseLong);

    void remove(Long id);

    void save(Supplier supplier);
}
