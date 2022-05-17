import React,{ useRef,useState } from "react";
import './style.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core"; 


const BusUrl=`http://localhost:1212/bus`;

function AddBus(){

    const [bus,setBus]=useState({});
    const [busId,setBusId]=useState();
    const [noOfSeats,setNoOfSeats]=useState();
    const [routeFrom,setRouteFrom]=useState();
    const [routeTo,setRoueteTo]=useState();
    const [fare,setFare]=useState();
    const [busType,setBusType]=useState();
    const fromValue = useRef('');
    const toValue = useRef('');
    const history = useHistory();



    const handleInputChange=(e)=>{

        e.preventDefault();
        setBus({
            ...bus,
            [e.target.name]:e.target.value
        });
        
    }
    const handleInputChange1=(e)=>{
        e.preventDefault();
        setBus({
            ...bus,
            "routeFrom":e.target.value
        });
        
    }
    const handleInputChange2=(e)=>{
        e.preventDefault();
        setBus({
            ...bus,
            "routeTo":e.target.value
        });
        
    }
    const sendValue=()=>
    {
        console.log(fromValue.current.value);
    }
    const handleDateChange=(value)=>{
        console.log(fromValue.current.value)
        setBus({
            ...bus,
            "from":fromValue.current.value,
            "till":toValue.current.value
            // "till":toValue.current.value
        });
    }
    const handleSubmit=(e)=>{
        if(localStorage.getItem("name")==null){
            console.log(localStorage.getItem("name"));
            alert("You need to login first");
            history.push("/login");

        }
        else{
        e.preventDefault();
        axios.post(BusUrl,bus)
            .then((response) => {
                alert(`Bus Data added successfully`);
            })
            .catch(() => {
                alert("Data could not be added.");
            });
        console.log(bus);
        
        // console.log(fromValue.current.value);
    }
}


    return(
        <div>
            <div className="form" >
            <div className="form-body">
            <h5 className="display-5 text-dark">Hello {localStorage.name}</h5>
                <div className="busId">
                    <label className="form__label" for="firstName"><i class="bi-list-ol"></i>BusId </label>
                    <input className="form__input" name="busId" type="number" value={busId} onChange = {(e) => handleInputChange(e)} id="busId" placeholder="busId"/>
                </div>
               
                <div className="routeFrom">
                    <label className="form__label" for="lastName"><i class="bi-signpost-2"></i>From</label>
                    <select name="routeFrom" >
                        <option name="routeFrom" value="Goa" onClick={(e) => handleInputChange1(e)} required>Goa</option>
                        <option name="routeFrom" value="Hyderabad" onClick={(e) => handleInputChange1(e)}>Hyderabad</option>
                        <option name="routeFrom" value="Bangalore" onClick={(e) => handleInputChange1(e)}>Bangalore</option>
                        <option name="routeFrom" value="Mumbai" onClick={(e) => handleInputChange1(e)}>Mumbai</option>
                    </select>
                </div>
                <div className="routeTo">
                    <label className="form__label" for="lastName"><i class="bi-signpost-2"></i>To</label>
                    <select name="routeTo" >
                        <option name="routeTo" value="Goa" onClick={(e) => handleInputChange2(e)} required>Goa</option>
                        <option name="routeTo" value="Hyderabad" onClick={(e) => handleInputChange2(e)}>Hyderabad</option>
                        <option name="routeTo" value="Bangalore" onClick={(e) => handleInputChange2(e)}>Bangalore</option>
                        <option name="routeTo" value="Mumbai" onClick={(e) => handleInputChange2(e)}>Mumbai</option>
                    </select>
                </div>
                <div className="fare">
                    <label className="form__label" for="firstName">Fare(<i class="fa fa-inr" aria-hidden="true"></i>) </label>
                    <input className="form__input" id="fare" name="fare" type="number" value={fare} onChange = {(e) => handleInputChange(e)} placeholder="fare"/>
                </div>
                <div className="fbusType">
                    <label className="form__label" for="firstName"><i class="fa fa-bus"></i>BusType</label>
                    <input className="form__input" name="busType" type="text" value={busType} onChange = {(e) => handleInputChange(e)} id="busType" placeholder="bustype"/>
                </div>
                <div className="busId">
                    <label className="form__label" for="firstName"><i class="fa fa-table"></i>no of seats </label>
                    <input className="form__input" name="noOfSeats" type="number" value={noOfSeats} onChange = {(e) =>                  handleInputChange(e)} id="noOfSeats" placeholder="seats"/>
                </div>
                <div>
                <TextField
                    className="form-control mt-3"
                    id="date"
                    label="From date"
                    type="date"
                    defaultValue="2022-08-08"
                    inputRef={fromValue}
                    onChange={({fromValue})=>handleDateChange()}
                    InputLabelProps={{
                    shrink: true,
                }}/>
                <TextField
                    className="form-control mt-3"
                    id="date"
                    label="To date"
                    type="date"
                    defaultValue="2022-08-08"
                    inputRef={toValue}
                    onChange={({fromValue})=>handleDateChange()}
                    InputLabelProps={{
                    shrink: true,
                }}/>
                </div>


            </div>
            <input onClick={(e)=>handleSubmit(e)} className="form-control btn btn-success mb-3" type="submit"  value="Register"/>
            </div>
        </div>
    )

}
export default AddBus;
