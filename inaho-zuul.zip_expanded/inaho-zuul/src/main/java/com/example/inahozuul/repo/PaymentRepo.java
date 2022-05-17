package com.example.inahozuul.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.inahozuul.model.Payment;

@Repository
public interface PaymentRepo extends MongoRepository<Payment, Integer>{

}
