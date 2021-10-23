package com.Mustapha.rest.webservices.todorestwebservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TodoRestWebservicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoRestWebservicesApplication.class, args);
	}

}
