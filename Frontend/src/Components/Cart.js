import { useState, useEffect} from "react";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


const Cart=()=>{
    const [appBus, setappBus] = useState([]);
    const [appBusCat, setappBusCat] = useState([]);

    let total=0;
    let str="";

    const cartUrl = `http://localhost:1112/cart/mycart`;
    const deleteUrl=`http://localhost:1112/cart/delete`;
    const seatUrl=`http://localhost:1212/bus/seats`;


    // var app = app();

    // const cors = require('cors');
    // app.use(cors());
   
    const history=useHistory();

    useEffect(() => {
        //------------------------------------------------------for loading all data from api
        fetchData();
        setappBusCat({
            busId:0,
            routeFrom:"",
            routeTo:"",
            busType:""
        })

        


            
    },[]);
    const fetchData = () => {
        axios.get(`${cartUrl}/${localStorage.getItem("name")}`)
            .then((response) => {
                console.log(response.data);
                setappBus(response.data);

            })
            .catch((e) => {
                alert("Initialization failed: "+e);
                setappBus([]);
            });
 
    }

    // const deleteData=(busId)=>{
    //     axios.delete(`${deleteUrl}/${localStorage.getItem("name")}/${busId}`)
    //     .then((busId)=>{
    //         console.log(busId);
    //         alert('deleted successfully');
    //         fetchData();
    //     })
    //     .catch((err)=>{
    //         alert('Sorry could not be deleted');
    //         console.log(err.response)
    //     });
    // }

    const deleteData=(item)=>{
        if(localStorage.getItem("name")==null){
            console.log(localStorage.getItem("name"));
            alert("You need to login first");
            history.push("/login");

        }
        else{
        item.noOfSeats+=item.seatsBooked;
        item.seatsBooked=0;
        axios.put(seatUrl,item)
        .then((response)=>{
            console.log("Updated seats");
        })
        .catch((err)=>{
            alert('Sorry could not be updated');
            console.log(err.response);
        });
        axios.delete(`${deleteUrl}/${localStorage.getItem("name")}/${item.busId}`)
        .then((busId)=>{
            console.log(busId);
            alert('deleted successfully');
            fetchData();
        })
        .catch((err)=>{
            alert('Sorry could not be deleted');
            console.log(err.response)
        });
    }
}

    
    // const deleteData=(article)=>{
    //     if(window.confirm("Are you sure?")){
    //         fetch(deleteUrl+"/"+article,{
    //             method: 'DELETE',
    //             headers: {'Access-Control-Allow-Origin': '*'}
    //         }); 
    //         console.log(article)
    
    //     }
    // }

    {appBus.map(
    (item)=>{
        {
            
            total=total+(item.fare*item.seatsBooked);
            
            
        }
    }

    )}
    if(total>5000 && total<10000){
        total=total-1000;
        str= "Discount Applied! Congrats! you save 1000 rupess."
        }
    if(total>10000 && total<15000){
        total=total-2000;
        str="Discount Applied! Congrats! you save 2000 rupess.";
    }
    if(total>15000){
        total=total-4000;
        str="Discount Applied! Congrats! you save 4000 rupess.";
    }

    localStorage.setItem("totalPayment",total);
    return(
        <div >
        <div className="col-11 border border-light shadow p-3 mb-5 bg-white">
        <h4 className="text-dark">Hello {localStorage.getItem("name")}</h4>
        <div><span className="font-weight-bold"> Your Cart </span>
        
{<div><table class="table table-striped">
<tbody>
<tr>
<th scope="col">S.no</th>
<th scope="col">BusId</th>
<th scope="col">From</th>
<th scope="col">To</th>
<th scope="col">Fare</th>
<th scope="col">Bus Type</th>
<th scope="col">Availability from</th>
<th scope="col">Availability till</th>
<th scope="col">Seats Booked</th>
</tr>
{appBus.map((item, i) => (
<tr key={i}>
<th scope="row">{i+1}</th>
<td>{item.busId}</td>
<td>{item.routeFrom}</td>
<td>{item.routeTo}</td>
<td><i class="fa fa-inr" aria-hidden="true"></i>{item.fare*item.seatsBooked}</td>
<td>{item.busType}</td>
<td>{item.from.split('T')[0]}</td>
<td>{item.till.split('T')[0]}</td>
<td>{item.seatsBooked}</td>
<td><button className="form-control mt-3 btn btn-danger" type="submit" onClick={()=>{deleteData(item)}}>delete</button></td>
</tr>
))}
</tbody>
</table> </div>}
</div>

<center>
    <h3 style={{color:"red"}}>{str}</h3>
    <h2 className="container">Total: <i class="fa fa-inr" aria-hidden="true"></i>{total}</h2>
   <Link to="/payment">< button className="btn btn-primary" type="submit">Click to Pay<i class="bi-box-arrow-in-right"></i></button></Link>
    </center>
         </div>    
        </div> 
    )
}
export default Cart;
