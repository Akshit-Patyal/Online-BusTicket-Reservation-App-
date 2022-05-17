import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import validator from 'validator';
import { useHistory, } from "react-router-dom";

const ResetPassword = () => {
    const [userId, setUserId] = useState();
    const [appUser, setAppUser] = useState({});
    const [appUserToAdd, setChangePassword] = useState({});
    const [appUsersList, setAppUsersList] = useState([]);
    //const [name,setName] = useState();
    const [mypic,setMyPic] = useState();
    const history = useHistory();
    const dataUrl = `http://localhost:5555/user/na/reset`;
    const [errorMessage, setErrorMessage] = useState('');
    // var user={};
    const [user,setUser] =useState();
    useEffect(() => {
        console.log(`useEffect`);
        //console.log(localStorage.user);
        setUser(JSON.parse(localStorage.user));
        console.log(user);
        setAppUser({
            
        });
    }, []);
   

    const handleAddAppUser = (evt) => {
        evt.preventDefault();
        setChangePassword(
            {
                ...appUserToAdd,
                [evt.target.name]: evt.target.value
            });
    }
    const validate1 = (value) => {
  
        if (validator.isStrongPassword(value, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })&& password===value) {
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
const [password,setPassword]=useState("");
      const validate = (value) => {
  
        if (validator.isStrongPassword(value, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
          setErrorMessage('Is Strong Password');
          setPassword(value);
        } else {
          setErrorMessage('Is Not Strong Password')
        }
      }




    const submitChangePassword = (evt) => {
        evt.preventDefault();
        // user=JSON.parse(localStorage.user);
        // user.password=appUserToAdd.password;
        console.log(user);
        if(errorMessage==='Is Strong Password'){
        axios.put(`${dataUrl}`, user)

            .then((response) => {
                
                alert(`Password changed successfully`);
                history.push("/login");

            })
            .catch(() => {
                alert("Passwords do not match");
            });}
            else{
            alert("Passwords do not match");
        }

    }
    return (<center>
        <div className="container" >
            
            <div>
                <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
                <h4 className="text-dark">Type in your new Password</h4>
                    <p>Enter the details below:</p>
                    <form className="form form-group form-secondary" onSubmit={submitChangePassword}>
                        <input className="form-control mt-3" type="password" id="password" name="password" value={appUserToAdd.password} onChange = {(e) => validate(e.target.value)} placeholder="Enter new password" />
                        <br></br>
                    <span style={{
                        color: 'red',
                    }}>{errorMessage}</span>

                        <input className="form-control mt-3" type="password" id="password" name="cpassword" value={appUserToAdd.cpassword} onChange = {(e) => validate1(e.target.value)} placeholder="Confirm password" />
                        <br></br>
                    <span style={{
                        color: 'red',
                    }}>{errorMessage}</span>

                        <input className="form-control mt-3 btn btn-success" type="submit" value="Reset Password" onClick={submitChangePassword}/>
                    </form>
                </div>
            </div>
        </div>
        </center>    );
}
export default ResetPassword;
