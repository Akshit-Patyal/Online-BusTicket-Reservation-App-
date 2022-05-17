package  com.example.inahozuul.repo;


import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;

import com.example.inahozuul.model.User;

@Repository
public interface UserRepository extends MongoRepository<User,Integer> {
    User findByUserName(String userName);
    
    //@Query(value="{'userName':?0,'secQues':?1, 'secAnswer':?2}")
    public User findByUserNameAndSecQuesAndSecAnswer(String userName,String secQues,String secAnswer);
    //public User resetPassword(String password,String confirmPassword);
    
}
