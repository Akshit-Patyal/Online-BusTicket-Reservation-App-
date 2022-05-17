package com.example.busdata.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.busdata.model.BusData;
import com.example.busdata.repo.BusDataRepo;

@Service
public class BusDataServiceImpl implements BusDataService{
	
	@Autowired
	BusDataRepo busDataRepo;

	@Override
	public BusData saveData(BusData busData) {
		// TODO Auto-generated method stub
		return busDataRepo.save(busData);
	}

	@Override
	public List<BusData> getData() {
		// TODO Auto-generated method stub
		return busDataRepo.findAll();
	}

	@Override
	public List<BusData> findByRouteFromAndRouteTo(String routeFrom, String routeTo) {
		// TODO Auto-generated method stub
		return busDataRepo.findByRouteFromAndRouteTo(routeFrom, routeTo);
	}

	@Override
	public List<BusData> findByUserName(String userName) {
		// TODO Auto-generated method stub
		return busDataRepo.findByUserName(userName);
	}

	@Override
	public BusData deleteByUserNameandBusId(String userName, int busId) {
		// TODO Auto-generated method stub
		return busDataRepo.deleteByUserNameandBusId(userName, busId);
	}


	@Override
	public List<BusData> findByRouteFromAndRouteToAndFrom(String routeFrom, String routeTo, Date from) {
		// TODO Auto-generated method stub
		return busDataRepo.findByRouteFromAndRouteToAndFrom(routeFrom, routeTo, from);
	}

	

}
