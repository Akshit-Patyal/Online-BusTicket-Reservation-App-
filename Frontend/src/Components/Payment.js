import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import { useHistory, } from "react-router-dom";


const Payment =()=>{
    const totalPayment =localStorage.getItem('totalPayment');
    const paymentUrl = `http://localhost:5555/user/na/pay`;
    const [payment, setPayment] = useState({});
    const history = useHistory();

    
    useEffect(() => {
        setPayment({
            "userName":localStorage.getItem("name"),
            "totalPayment":totalPayment
        });
        
    }, [])
    const handleAddAppUser = (evt) => {
        evt.preventDefault();
        setPayment(
            {
                ...payment,
                [evt.target.name]: evt.target.value
            });
    }
    const savePayment = () => {
        if(localStorage.getItem("name")==null){
            console.log(localStorage.getItem("name"));
            alert("You need to login first");
            history.push("/login");

        }
        else{
        console.log(payment)
        axios.post(paymentUrl, payment)
            .then((response) => {
                console.log(response.data);
                alert(`payment done successfully`);
                history.push("/search");
            })
            .catch(() => {
                alert("cannot process request at the moment");
            });
    }
}

    return(<center>
        <div class="container" >
            <div className="col-6 border border-light shadow p-3 mb-5 bg-white" style={{textAlign:"center"}}>
            <h5 className="text-dark">Hi, {localStorage.getItem("name")}</h5>
            <h4><b>Enter Payment Details</b></h4>
            <input className="form-control mt-3" type="text" id="cardNumber" name="cardNumber" value={payment.cardNumber} onChange={handleAddAppUser} placeholder="Valid Card Number" />
            <input className="form-input mt-3" type="text" id="expityMonth" name="expMonth" value={payment.expMonth} placeholder="MM" onChange={handleAddAppUser} required />
            <input className="form-input mt-3" type="text" id="expityYear" name="expYear" value={payment.expYear} placeholder="YYYY" onChange={handleAddAppUser} required />
            <input type="password" class="form_input mt-3" name="cvv" value={payment.cvv} id="cvCode" placeholder="CVV" onChange={handleAddAppUser}required />
            <div style={{'background':'#7FB3D5'}}>
                <p style={{'margin':'15px'}}><b>Total Payment : <i class="fa fa-inr" aria-hidden="true"></i>{totalPayment}/-</b></p>
                </div>           
            <button class="btn btn-success btn-md btn-block" type="submit" onClick={()=>{if (window.confirm('Are you sure you want to proceed?')){savePayment()}}}>Pay</button>
</div>
</div>
</center> );
}
export default Payment