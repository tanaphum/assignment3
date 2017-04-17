package com.assignment.config;

import com.assignment.controller.ProductController;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Admin on 17/4/2560.
 */

@Configuration
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig(){
        register(ProductController.class);
        register(MultiPartFeature.class);
    }
}
