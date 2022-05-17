package com.example.passenger.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class PassengerModel {

	private int busId;
	private String userName;
	private String names;
	private String age;
	private String gender;
	
}
