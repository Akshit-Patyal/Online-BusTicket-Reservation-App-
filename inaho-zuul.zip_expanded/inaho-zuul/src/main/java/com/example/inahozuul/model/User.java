package  com.example.inahozuul.model;

import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document // @Entity
public class User {
   
	@Id
private int UserId;
	
	private String userName;
	private int age;
	private String role;
	private String gender;
	private String password;
	private String secQues;
	private String secAnswer;
	private String email;
	
	//private String mypic;
    
    
	
    
    
}
