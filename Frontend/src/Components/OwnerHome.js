import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './style.css';
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core"; 


function OwnerHome(){
    const ownerName=localStorage.getItem("userName");
    const [busList,setBusList]=useState([]);

    const history = useHistory();


    const dataUrl = `http://localhost:1212/bus`;
    const deleteUrl=`http://localhost:1212/bus/delete`;

    const getBuses=(e)=>{
        e.preventDefault();

        if(localStorage.getItem("name")==null){
            console.log(localStorage.getItem("name"));
            alert("You need to login first");
            history.push("/login");

        }
        else{
        axios.get(`${dataUrl}`)
                .then((response)=>
                {
                console.log(localStorage.getItem("name"));
                console.log(response.data);
                setBusList(response.data);

                })
                .catch((err)=>{
                    console.log(err.message);
                    alert("no buses found,please add a bus");

                })
            }



    };
    
    return(
        <div className="container ownerHome">
            <div className="ownerHome">
            <marquee direction="up"  className="oHLeft text-light" scrollamount="1"><b>Gone are the days when people used to plan for hours to get their bus reservation. Be it long queues in front of ticket booking offices or prolonged waiting time over the telephone, people had to go through a lot of hassles while booking bus tickets. But now the scenario has completely changed in the Indian bus travel industry. With the increasing popularity and adoption of on-demand bus booking apps, now the entire process of making a bus travel reservation has become quick and hassle-free.</b></marquee>
            <div className="oHRight">
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to="/addbus" className="nav-link" ><button className="bg-success text-light" value="Add a new Bus" variant="dark"><b><i class="bi-plus"></i>Add a new Bus</b></button></Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to="/search" className="nav-link" ><button className="bg-warning text-light" value="Search for a bus"><b><i class="bi-search"></i>Search for a Bus</b></button></Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <button className="bg-primary text-light" value="View buses" onClick={getBuses}><b><i class="bi-eye"></i>View all Buses</b></button>
            </div> 
            </div>
            </div>         
            <div>
            <div>
            
      {busList.map((item,i)=>(
      <div className="buscard">
          <div className="busid">
            {item.busId}

          </div>
          <div className="fromto">
            <div className="froma">
                <p>From:{item.routeFrom}</p>
            </div>
            <div className="froma">
                <p>starts at:{item.from.split('T')[0]}</p>
            </div>


          </div>
          <div className="fromto">
          <div className="froma">
                <p>To:{item.routeTo}</p>
            </div>
            <div className="froma">
                <p>reaches at:{item.till.split('T')[0]}</p>
            </div>

          </div>
          <div className="type">
              {item.busType}

          </div>
          
          <div className="fare">
          <i class="fa fa-inr" aria-hidden="true"></i>
              {item.fare}

          </div>
          
          
         
      </div>))}
      </div>
            </div>
        </div>
    )

}
export default OwnerHome;