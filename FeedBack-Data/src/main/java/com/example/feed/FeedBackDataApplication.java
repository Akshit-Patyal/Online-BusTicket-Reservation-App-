package com.example.feed;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class FeedBackDataApplication {

	public static void main(String[] args) {
		SpringApplication.run(FeedBackDataApplication.class, args);
	}

}
