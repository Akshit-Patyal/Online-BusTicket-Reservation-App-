package com.example.busdata.repo;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.busdata.model.BusData;

@Repository
public interface BusDataRepo extends MongoRepository<BusData, Integer>{
	
	public List<BusData> findByUserName(String userName);

	
	public List<BusData> findByRouteFromAndRouteTo(String routeFrom, String routeTo);
	
	@Query(value="{'userName':?0,'busId':?1}",delete=true)
	public BusData deleteByUserNameandBusId(String userName,int busId);
	
	public List<BusData> findByRouteFromAndRouteToAndFrom(String routeFrom, String routeTo,Date from);

}
