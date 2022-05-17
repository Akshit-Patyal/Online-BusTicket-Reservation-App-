package com.example.cart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cart.model.CartData;
import com.example.cart.service.CartDataService;

@RequestMapping("cart")
@RestController
@CrossOrigin
public class CartDataController {
	
	@Autowired
	CartDataService cartDataService;
	
	@PostMapping
	public ResponseEntity<CartData> saveCart(@RequestBody CartData cartData){
		CartData cart=cartDataService.saveData(cartData);
		return new ResponseEntity<CartData>(cart,HttpStatus.OK);
		
	}
	
	@GetMapping("mycart/{userName}")
	public ResponseEntity<List<CartData>> MyCart(@PathVariable String userName){
		List<CartData> allList=cartDataService.findByUserName(userName);
		return new ResponseEntity<List<CartData>>(allList,HttpStatus.OK);
	}

	@DeleteMapping("delete/{userName}/{busId}")
	public ResponseEntity<CartData> DeleteCart(@PathVariable String userName,@PathVariable int busId){
		CartData deletedCart=cartDataService.deleteByUserNameandBusId(userName, busId);
		return new ResponseEntity<CartData>(deletedCart,HttpStatus.OK);
	}
}
