package com.example.demo.controllers;

import com.example.demo.entities.Supplier;
import com.example.demo.services.ISupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SupplierController {

    @Autowired
    private ISupplierService iSupplierService;

    @GetMapping(value = "/api/suppliers")
    public List<Supplier> getAll(){
        return iSupplierService.getAll();
    }

    @GetMapping(value = "/api/supplier/{id}")
    public Supplier getById(@PathVariable String id){
        return iSupplierService.get(Long.parseLong(id));
    }

    @DeleteMapping(value = "/api/supplier/{id}")
    public void remove(@PathVariable String id){
        iSupplierService.remove(Long.parseLong(id));
    }

    @PostMapping(value = "/api/supplier")
    public void save(@RequestBody Supplier supplier){
        iSupplierService.save(supplier);
    }
}
