package com.example.passenger.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.passenger.model.PassengerModel;
import com.example.passenger.service.PassengerService;

@CrossOrigin
@RequestMapping("passenger")
@RestController
public class PassengerController {

	@Autowired
	PassengerService passengerService;
	
	@PostMapping
	public ResponseEntity<PassengerModel> postData(@RequestBody PassengerModel model){
		PassengerModel passengerModel=passengerService.saveData(model);
		return new ResponseEntity<PassengerModel>(passengerModel,HttpStatus.OK);
	}
	
	
	@GetMapping
	public ResponseEntity<List<PassengerModel>> getAllData(){
		List<PassengerModel> allData=passengerService.getData();
		return new ResponseEntity<List<PassengerModel>>(allData,HttpStatus.OK);
	}
}
