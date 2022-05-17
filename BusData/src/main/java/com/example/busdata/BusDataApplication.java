package com.example.busdata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class BusDataApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusDataApplication.class, args);
	}

}
