package com.example.inahozuul.service;

import org.springframework.stereotype.Service;

import com.example.inahozuul.model.Payment;

@Service
public interface PaymentService {

	public Payment addPayment(Payment payment);
}
