package com.example.cart.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.cart.model.CartData;

@Repository
public interface CartDataRepo extends MongoRepository<CartData, Integer>{
	
	public List<CartData> findByUserName(String userName);
	
	@Query(value="{'userName':?0,'busId':?1}",delete=true)
	public CartData deleteByUserNameandBusId(String userName,int busId);

}
