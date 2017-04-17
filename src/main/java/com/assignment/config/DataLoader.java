package com.assignment.config;


import com.assignment.dao.ProductDAO;
import com.assignment.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;


/**
 * Created by Admin on 16/4/2560.
 */
@ConfigurationProperties(prefix = "server")
@Component
public class DataLoader implements ApplicationRunner {
    ProductDAO productDAO;

    @Autowired
    public void setProductDAO(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }


    String baseUrl;
    String imageUrl;
    String imageBaseUrl;

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    @Transactional
    public void run(ApplicationArguments args) throws Exception {
        imageBaseUrl = baseUrl + imageUrl;
        Product product1 = Product.builder().productid("miku-001").name("miku").image(imageBaseUrl+"miku.jpg").productAmount(5).price(20.00).description("miku").build();
        Product product2 = Product.builder().productid("miku-002").name("miku").image(imageBaseUrl+"miku.jpg").productAmount(5).price(20.00).description("miku").build();
        Product product3 = Product.builder().productid("miku-003").name("miku").image(imageBaseUrl+"miku.jpg").productAmount(5).price(20.00).description("miku").build();


        productDAO.addProduct(product1);
        productDAO.addProduct(product2);
        productDAO.addProduct(product3);

    }
}
