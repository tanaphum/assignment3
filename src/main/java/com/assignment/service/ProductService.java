package com.assignment.service;

import com.assignment.entity.Product;
import org.springframework.stereotype.Service;


import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Admin on 17/4/2560.
 */

public interface ProductService {
    List<Product> getProducts();
    Product findById(long id);
    Product addProduct(Product product);
    Product addProduct(Product product, String imageFileName, BufferedImage image) throws IOException;
}
