package com.example.inahozuul.model;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Owner {

	@Id
	private int ownerId;
		
		private String ownerName;
		private int age;
		private String gender;
		private String password;
		private String secQues;
		private String secAnswer;
		private String email;
	
}
