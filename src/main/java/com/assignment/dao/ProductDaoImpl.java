package com.assignment.dao;

import com.assignment.entity.Product;
import com.assignment.repository.ProductRepository;
import jersey.repackaged.com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Admin on 17/4/2560.
 */
@Repository
@Profile("DBDataSource")
public class ProductDaoImpl implements ProductDAO {

    ProductRepository productRepository;

    @Autowired
    public void setProductRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public List<Product> getProducts() {
        return Lists.newArrayList(productRepository.findAll());
    }

    @Override
    public Product findById(long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }


    @Override
    public Integer size() {
        return (int)productRepository.count();
    }
}
