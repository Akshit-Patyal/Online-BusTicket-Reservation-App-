package com.example.inahozuul.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.inahozuul.model.Payment;
import com.example.inahozuul.repo.PaymentRepo;

@Service
public class PaymentImpl implements PaymentService{
	
	@Autowired
	PaymentRepo paymentRepo; 

	@Override
	public Payment addPayment(Payment payment) {
		// TODO Auto-generated method stub
		return paymentRepo.save(payment);
	}

}
