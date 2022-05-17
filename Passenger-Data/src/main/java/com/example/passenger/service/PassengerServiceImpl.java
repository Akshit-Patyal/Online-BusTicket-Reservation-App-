package com.example.passenger.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.passenger.model.PassengerModel;
import com.example.passenger.repo.PassengerRepo;

@Service
public class PassengerServiceImpl implements PassengerService{
	
	@Autowired
	PassengerRepo passengerRepo;

	@Override
	public PassengerModel saveData(PassengerModel model) {
		// TODO Auto-generated method stub
		return passengerRepo.save(model);
	}

	@Override
	public List<PassengerModel> getData() {
		// TODO Auto-generated method stub
		return passengerRepo.findAll();
	}
	
	

}
