import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
const Login = () => {
    const [appUserToAdd, setAppUserToAdd] = useState({});
    const [appUsersList, setAppUsersList] = useState([]);
    const [isLoggedin, setIsLoggedin] = useState(false);

    const dataUrl = `http://localhost:5555/user/na/login`;
    const history = useHistory();
    useEffect(() => {
        console.log(`useEffect`);
        setAppUserToAdd({
            // password:"JustKidding",
            // email:"jk@gmail.com"
        });
    }, []);
   
      
    const handleAddAppUser = (evt) => {
        evt.preventDefault();
        setAppUserToAdd(
            {
                ...appUserToAdd,
                [evt.target.name]: evt.target.value
            });
    }
    
    const submitAddAppUser = (evt) => {
        evt.preventDefault();
        //appUserToAdd.mypic=mypic;
        //console.log(appUserToAdd);
        
       
        axios.post(dataUrl, appUserToAdd)
            .then((response) => {
               console.log(response.data+"Hello");
                console.log(response.data.length);
                
                if(response.data.length!=0){
                    
                    //console.log(response.data.email);
                    localStorage.setItem("head",response.data.data);
                    localStorage.setItem("name",appUserToAdd.userName)
                    setIsLoggedin(true);
                   // alert(`Login successful`);
                    if(response.data=="Invalid Data"){
                        alert(`Invalid Data`);
                        //history.push("/owner");
                        console.log(response.data);
                        //console.log(appUserToAdd);
                    }
                    else{
                        alert(`Login Successful`);
                        console.log(response.data);
                        if(appUserToAdd.role=="Owner"){
                            history.push("/owner");
                        }
                        else if(appUserToAdd.role=="User"){
                            history.push("/search");
                        }
                    }
                    // if(appUserToAdd.role.equals(response.data.role)){
                    //     alert(`Login Successful`);
                    //     //history.push("/search");
                    //     console.log(appUserToAdd);
                    // };


                }
                else{
                alert("Wrong Password or username.");
                console.log(response.data);
                }
            })
            .catch((e) => {
                console.log(e.message);
                alert("Wrong Password or username.");
            
            });
    }



    // const submitAddAppUser = (evt) => {
    //     evt.preventDefault();
    //     //appUserToAdd.mypic=mypic;
    //     axios.post(dataUrl, appUserToAdd)
    //         .then((header) => {
                
    //             console.log(header.data+"Hello");
    //             if(header.data!=""){
    //                 localStorage.setItem("head",header.data) 
    //                 localStorage.setItem("name",appUserToAdd.userName);                   
    //                 alert(`Login successful`);
    //                 history.push("/get");
    //                 //router.route("/post")
    //             }
    //             else{
    //             alert("Wrong Password or username.");
    //             history.push("/login");
    //             }
    //         })
    //         .catch(() => {
    //             alert("Not Available");
    //         });
    // }
    // const Forgot=()=>{
    //     history.push("/post");
    // }
    return (<center>
        <div className="container">
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white" style={{textAlign:"center"}}>
                <p className="display-4 text-success"><b>Login</b></p>
                    <h4>Enter the details below:</h4>
                    <form className="form form-group form-secondary" onSubmit={submitAddAppUser}>
                    <input className="form-control mt-3" type="text" id="userName" name="userName" value={appUserToAdd.userName} onChange={handleAddAppUser} placeholder="Your username" />
                        <input className="form-control mt-3" type="password" id="password" name="password" value={appUserToAdd.password} onChange={handleAddAppUser} placeholder="Enter password" />
                        <br/>     
                     <div className="Role" style={{textAlign:"left",color:"dark"}}>
                    <label className="form__label" for="role">Role</label>
                    <input type="radio" className="form__input" id="owner" value="Owner" name="role" onChange={handleAddAppUser} /> Owner
                    <input type="radio" className="form__input" id="user" value="User" name="role" onChange={handleAddAppUser}/> User
                </div>        
                        <input className="form-control mt-3 btn btn-success" type="submit" value="Login"/>
                        <br/><br/>
                        <a href="/forgotpassword"><b>forgot password?</b></a>
                        <br/><br/>
                        <a href="/registration"><b>Not Registered? Sign up here<i class="bi-person-plus-fill"></i></b></a>
                    </form>
                </div>
        </div>
        </center>
    );
}
export default Login;
