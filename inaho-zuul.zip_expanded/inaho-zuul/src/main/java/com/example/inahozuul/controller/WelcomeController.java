package  com.example.inahozuul.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.inahozuul.model.AuthRequest;
import com.example.inahozuul.model.Payment;
import com.example.inahozuul.model.User;
import com.example.inahozuul.repo.UserRepository;
import com.example.inahozuul.service.PaymentService;
import com.example.inahozuul.util.JwtUtil;

@CrossOrigin(allowedHeaders="*" , origins="*")
@RestController
@RequestMapping("user")
public class WelcomeController {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/")
    public String welcome() {
        return "Welcome to JWT TOKENS !!";
    }

    @GetMapping("/test")
    public String welcomeTest() {
        return "Welcome to JWT TOKENS !!";
    }

    @Autowired
    UserRepository userRepository;
    
    
    @PostMapping("na/signup")
    public User signup(@RequestBody User user){
    	
    	return userRepository.save(user);
          }
    
    @PostMapping("na/login")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
    	User user=userRepository.findByUserName(authRequest.getUserName());
    	if(user.getRole().equals(authRequest.getRole())) {
        try {
        	System.out.println(authRequest);
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
            );
        } catch (Exception ex) {
            throw new Exception("inavalid username/password");
        }
        return jwtUtil.generateToken(authRequest.getUserName());
    	}
    	else {
    		return "Invalid Data";
    	}
    }
    
    @GetMapping("na/verify/{userName}/{secQues}/{secAnswer}")
    public User verify(@PathVariable String userName, @PathVariable String secQues, @PathVariable String secAnswer) {
    	return userRepository.findByUserNameAndSecQuesAndSecAnswer(userName, secQues, secAnswer);
    }
    
//    @PutMapping("na/reset/{password}/{confirmPassword}")
//    public User reset(@PathVariable String password, @PathVariable String confirmPassword) {
//    	User res=userRepository.resetPassword(password, confirmPassword);
//    	if(password.equals(confirmPassword)) {
//    		return res;
//    	}
//    	else 
//    		return null;
//    }
    @PutMapping("na/reset")
    public User resetPasswrod(@RequestBody User user){
    	
    	return userRepository.save(user);
          }
    
//    @GetMapping("na/verify/{ownerName}/{secQues}/{secAnswer}")
//    public Owner verifyOwner(@PathVariable String ownerName, @PathVariable String secQues, @PathVariable String secAnswer) {
//    	return ownerRepository.findByOwnerNameAndSecQuesAndSecAnswer(ownerName, secQues, secAnswer);
//    }
//    
//    @PutMapping("na/reset")
//    public Owner resetOwnerPasswrod(@RequestBody Owner owner){
//    	
//    	return ownerRepository.save(owner);
//          }

    @Autowired
    PaymentService paymentService;
    
    @PostMapping("na/pay")
    public ResponseEntity<Payment> getPayment(@RequestBody Payment payment){
    	Payment addPay=paymentService.addPayment(payment);
    	return new ResponseEntity<Payment>(addPay,HttpStatus.OK);
    }
    
}
