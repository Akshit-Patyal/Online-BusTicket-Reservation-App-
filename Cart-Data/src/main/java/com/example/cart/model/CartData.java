package com.example.cart.model;

import java.util.Date;


import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class CartData {

	
	private int busId;
	private String userName;
	private String routeFrom;
	private String routeTo;
	private int fare;
	private String busType;
	private Date from;
	private Date till;
	private int noOfSeats;
	private int seatsBooked;

	
}
