package com.example.busdata.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.busdata.model.BusData;
import com.example.busdata.model.SearchBus;
import com.example.busdata.service.BusDataService;

@CrossOrigin
@RequestMapping("bus")
@RestController
public class BusDataController {


	@Autowired
	BusDataService busDataService;
	
	@PostMapping
	public ResponseEntity<BusData> saveData(@RequestBody BusData busData){
		BusData saveBus=busDataService.saveData(busData);
		return new ResponseEntity<BusData>(saveBus,HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<BusData>> getData(){
		List<BusData> allData=busDataService.getData();
		return new ResponseEntity<List<BusData>>(allData,HttpStatus.OK);
	}
	
	@GetMapping("cart/{userName}")
	public ResponseEntity<List<BusData>> cart(@PathVariable String userName){
		List<BusData> cartData=busDataService.findByUserName(userName);
		return new ResponseEntity<List<BusData>>(cartData,HttpStatus.OK);
	}
	
	
	@GetMapping("route/{routeFrom}/{routeTo}")
	public ResponseEntity<List<BusData>> findRoute(@PathVariable String routeFrom, @PathVariable String routeTo){
	List<BusData> allRoutes=busDataService.findByRouteFromAndRouteTo(routeFrom, routeTo);
	return new ResponseEntity<List<BusData>>(allRoutes,HttpStatus.OK);
	}
	
	@DeleteMapping("delete/{userName}/{busId}")
	public ResponseEntity<BusData> deleteRoute(@PathVariable String userName,@PathVariable int busId){
		BusData deleteData=busDataService.deleteByUserNameandBusId(userName, busId);
		return new ResponseEntity<BusData>(deleteData,HttpStatus.OK);
	}
	
	@PostMapping("date")
	public ResponseEntity<List<BusData>> getDate(@RequestBody SearchBus searchBus){
		List<BusData> allDates=busDataService.findByRouteFromAndRouteToAndFrom(searchBus.getFrom(),searchBus.getTo(),searchBus.getStart());
		return new ResponseEntity<List<BusData>>(allDates,HttpStatus.OK);
	}
	
	@PutMapping("seats")
	public ResponseEntity<BusData> getSeats(@RequestBody BusData busData){
		BusData noOfSeatsAvailable=busDataService.saveData(busData);
		return new ResponseEntity<BusData>(noOfSeatsAvailable,HttpStatus.OK);
	}

}
