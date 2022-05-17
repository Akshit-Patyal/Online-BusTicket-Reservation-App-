package com.example.passenger.service;

import java.util.List;


import org.springframework.stereotype.Service;

import com.example.passenger.model.PassengerModel;

@Service
public interface PassengerService {
	
	public PassengerModel saveData(PassengerModel model);
	public List<PassengerModel> getData();
}
