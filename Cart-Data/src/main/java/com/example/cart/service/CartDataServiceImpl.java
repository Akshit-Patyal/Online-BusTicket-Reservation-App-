package com.example.cart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cart.model.CartData;
import com.example.cart.repo.CartDataRepo;

@Service
public class CartDataServiceImpl implements CartDataService{
	
	@Autowired
	CartDataRepo cartDataRepo;

	@Override
	public CartData saveData(CartData cartData) {
		// TODO Auto-generated method stub
		return cartDataRepo.save(cartData);
	}

	@Override
	public List<CartData> findByUserName(String userName) {
		// TODO Auto-generated method stub
		return cartDataRepo.findByUserName(userName);
	}

	@Override
	public CartData deleteByUserNameandBusId(String userName, int busId) {
		// TODO Auto-generated method stub
		return cartDataRepo.deleteByUserNameandBusId(userName, busId);
	}

}
