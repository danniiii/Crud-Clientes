package com.example.demo.services;


import com.example.demo.entities.Supplier;
import com.example.demo.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService implements ISupplierService{

    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public List<Supplier> getAll(){
        return (List<Supplier>)supplierRepository.findAll();
    }

    @Override
    public Supplier get(Long id) {
        return (Supplier) supplierRepository.findById(id).get();
    }

    @Override
    public void remove(Long id){
        supplierRepository.deleteById(id);
    }

    @Override
    public void save(Supplier supplier){
        supplierRepository.save(supplier);
    }
}
