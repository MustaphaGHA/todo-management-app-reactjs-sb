package com.Mustapha.rest.webservices.todorestwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
//	@GetMapping(path = "/hello-world")
//	public String helloWorld() {
//		return "Hello World";
//	}
//	
//	@GetMapping(path = "/hello-world-bean")
//	public HelloWorldBean helloWorldBean() {
//		return new HelloWorldBean("Hello World Bean");
//	}
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathvarible(@PathVariable String name) {
		//throw new RuntimeException("Something went wrong"); 
		return new HelloWorldBean(String.format("HelloWorld , %s", name));
	}
}
