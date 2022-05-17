package com.example.passenger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class PassengerDataApplication {

	public static void main(String[] args) {
		SpringApplication.run(PassengerDataApplication.class, args);
	}

}
