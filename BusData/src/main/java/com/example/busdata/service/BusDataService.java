package com.example.busdata.service;

import java.util.Date;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.busdata.model.BusData;

@Service
public interface BusDataService {

	public BusData saveData(BusData busData);
	
	public List<BusData> getData();
	
	public List<BusData> findByUserName(String userName);
	
	public List<BusData> findByRouteFromAndRouteTo(String routeFrom, String routeTo);
	
	public BusData deleteByUserNameandBusId(String userName,int busId);
	
	public List<BusData> findByRouteFromAndRouteToAndFrom(String routeFrom, String routeTo,Date from);


	
}
