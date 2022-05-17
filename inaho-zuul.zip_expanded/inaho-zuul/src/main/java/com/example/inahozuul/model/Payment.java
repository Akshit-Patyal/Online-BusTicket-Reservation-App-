package com.example.inahozuul.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Payment {

	private String userName;
	private String cardNumber;
	private int expMonth;
	private int expYear;
	private int cvv;
	private int totalPayment;
}
