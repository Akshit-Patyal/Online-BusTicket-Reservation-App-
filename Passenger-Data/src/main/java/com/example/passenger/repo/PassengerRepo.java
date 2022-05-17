package com.example.passenger.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.passenger.model.PassengerModel;

@Repository
public interface PassengerRepo extends MongoRepository<PassengerModel, Integer>{

}
