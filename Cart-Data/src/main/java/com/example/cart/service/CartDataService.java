package com.example.cart.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.cart.model.CartData;

@Service
public interface CartDataService {
	
	public CartData saveData(CartData cartData);
	
	public List<CartData> findByUserName(String userName);
	
	public CartData deleteByUserNameandBusId(String userName,int busId);

	

}
