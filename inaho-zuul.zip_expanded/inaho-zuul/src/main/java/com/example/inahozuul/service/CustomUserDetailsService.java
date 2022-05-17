package  com.example.inahozuul.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.inahozuul.model.User;
import com.example.inahozuul.repo.UserRepository;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository repository;


    
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		
		User user=repository.findByUserName(userName);		
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), (Collection<? extends GrantedAuthority>) new ArrayList());
	}
	
}
