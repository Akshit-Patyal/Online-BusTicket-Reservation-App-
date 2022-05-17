import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
const ForgotPassword = () => {
    const [userId, setUserId] = useState();
    const [appUser, setAppUser] = useState({});
    const [appUserToAdd, setAppUserToAdd] = useState({});
    const [appUsersList, setAppUsersList] = useState([]);
    //const [name,setName] = useState();
    const [mypic,setMyPic] = useState();
    const history=useHistory();
    // const dataUrl = `http://localhost:5555/user/na/verify/rohit/What is you childhood name/ROHIT`;
    const dataUrl = `http://localhost:5555/user/na/verify`;
    useEffect(() => {
        console.log(`useEffect`);
        setAppUser({
            id: 101,
            name: "Player-1",
            team: "Team-1",
            mypic: ""
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
         axios.get(`${dataUrl}/${appUserToAdd.userName}/${appUserToAdd.secQues}/${appUserToAdd.secAnswer}`)
       // axios.get(`${dataUrl}`)
            .then((response) => {

                if(response.data.length!=0){
                localStorage.user=JSON.stringify(response.data);
                alert(`Verification Successfull`);
                console.log(response.data);
                history.push("/resetpassword");
                }
                else{
                    alert("Empty String");
                }
            })
            .catch(() => {
                alert("Try Again");
            });
    }
    return (<center>
        <div className="container" >            
            <div>
                <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
                <h5 className="text-dark">Welcome {localStorage.getItem("name")}</h5>
                    <h3>Enter the details below to reset your password:</h3>
                    <form className="form form-group form-secondary" onSubmit={submitAddAppUser}>
                        <input className="form-control mt-3" type="text" id="userName" name="userName" value={appUserToAdd.userName} onChange={handleAddAppUser} placeholder="Enter name" />
                        <br/>
                        <div>
                            <label className="text-dark"><i class="bi-lock-fill"></i>
                                Choose Security Question
                        <select id="secQues" name="secQues" value={appUserToAdd.secQues} onChange={handleAddAppUser}>
                            <option value={appUserToAdd.secQues}>What high school did you attend</option>
                            <option value={appUserToAdd.secQues}>What is you childhood name</option>
                            <option value={appUserToAdd.secQues}>Who was your favourite teacher in elementary school</option>
                            <option value={appUserToAdd.secQues}>In which City were you born</option>
                        </select>
                        </label>
                        <input className="form-control mt-3" type="text" id="secAnswer" name="secAnswer" value={appUserToAdd.secAnswer} onChange={handleAddAppUser} placeholder="Your Answer" />
                        </div>                        
                        <input className="form-control mt-3 btn btn-warning" type="submit" value="Forgot Password" onClick={submitAddAppUser}/>
                    </form>
                </div>
            </div>
        </div>
        </center>    );
}
export default ForgotPassword;
