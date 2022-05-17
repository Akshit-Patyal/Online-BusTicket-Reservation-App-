import React, {useState,setState, useEffect} from 'react';
import axios from 'axios';
import './style.css';
import validator from 'validator';

import { useHistory, } from "react-router-dom";
function RegistrationForm() {

    const dataUrl="http://localhost:5555/user/na/signup";
    
    const [userName, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [email, setEmail] = useState(null);
    const [secQues, setSecQuestion] = useState(null);
    const [gender, setGender] = useState(null);
    const [userId, setId] = useState(null);
    const [secAnswer, setSecAnswer] = useState(null);
    const [password,setPassword] = useState(null);
    const [user,setUser]=useState({});
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');
    

    const handleInputChange = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            });
        
    }
    

    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(user);
        if(errorMessage==='Is Strong Password'){
        axios.post(dataUrl,user)
        .then((response) => {
            alert(`User added successfully ${response.data}`);
            console.log(`User added successfully ${response.data}`);
            history.push("/login");
        })
        .catch((e) => {
            console.log(e);
            alert("User could not be added.");
        });}
        else{
            alert("not a strong password");
        }
        
    }
    const validate = (value) => {
  
        if (validator.isStrongPassword(value, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
          setErrorMessage('Is Strong Password');
          setUser(
            {
                ...user,
                "password": value
            });
        } else {
          setErrorMessage('Is Not Strong Password')
        }
      }

    return(
        <div className="form " >
            <div className="form-body shadow p-3 mb-5 bg-white rounded">
                <div className="username">
                    <label className="form__label" for="firstName"><i class="bi-person-fill"></i>Name </label>
                    <input className="form-control mt-3" name="userName" type="text" value={userName} onChange = {(e) => handleInputChange(e)} id="name" placeholder="Name" required />
                </div>
                <div className="email">
                    <label className="form__label" for="email"><i class="bi-envelope-fill"></i>Email</label>
                <input className="form-control mt-3" type="text" id="email" name="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Your Email" required />
                </div>

                <div className="password">
                    <label className="form__label" for="password"><i class="bi-key-fill"></i>Password </label>
                    <input className="form-control mt-3" type="password" name="password" id="password" value={password} onChange = {(e) => validate(e.target.value)} placeholder="Password"/>
                    <br></br>
                    <span style={{
                        color: 'red',
                    }}>{errorMessage}</span>
                </div>
                <div className="id">
                    <label className="form__label" for="id"><i class="bi-list-ol"></i>Id</label>
                    <input  type="number" name="userId" id="userId" className="form-control mt-3" value={userId} onChange = {(e) => handleInputChange(e)} placeholder="Id"/>
                </div>
                <div className="age">
                    <label className="form__label" for="age"><i class="bi-person-badge-fill"></i>Age</label>
                <input className="form-control mt-3" type="number" id="age" name="age" value={age} onChange = {(e) => handleInputChange(e)} placeholder="Enter age" />
                </div>
                
                
                <div className="secQuestion">
                <label className="text-dark">
                <i class="bi-lock-fill"></i>
                                Choose Security Question
                        <select className="form-control mt-3" id="secQues" name="secQues" value={secQues} onChange={(e) => handleInputChange(e)} required>
                            <option value={secQues}>What high school did you attend</option>
                            <option value={secQues}>What is you childhood name</option>
                            <option value={secQues}>Who was your favourite teacher in elementary school</option>
                            <option value={secQues}>In which City were you born</option>
                        </select>
                        </label>
                        
                </div>
                
                <div className="secAnswer">
                    <input  type="text" name="secAnswer" id="secAnswer" value={secAnswer}  className="form-control mt-3" onChange = {(e) => handleInputChange(e)} placeholder="Security Answer" required/>
                </div>
                <br/>
                <div className="Role">
                    <label className="form__label" for="role">Role</label>
                    <input type="radio" className="form__input" id="owner" value="Owner" name="role" onChange={(e) => handleInputChange(e)} required/> Owner
                    <input type="radio" className="form__input" id="user" value="User" name="role" onChange={(e) => handleInputChange(e)}/> User
                </div>                
                <div class="footer">
                <input onClick={(e)=>handleSubmit(e)} className="form-control btn btn-primary mb-3" type="submit"  value="Register"/>
            </div>
                
            </div>
            
        </div>
       
    )
           
}

export default RegistrationForm

