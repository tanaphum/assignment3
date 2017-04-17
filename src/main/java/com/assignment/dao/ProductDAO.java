package com.assignment.dao;

import com.assignment.entity.Product;

import java.util.List;

/**
 * Created by Admin on 17/4/2560.
 */
public interface ProductDAO {
    List<Product> getProducts();
    Product findById(long id);
    Product addProduct(Product product);
    Integer size();
}
