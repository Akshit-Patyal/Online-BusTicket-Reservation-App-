package com.example.busdata.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class BusData {

	@Id
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
