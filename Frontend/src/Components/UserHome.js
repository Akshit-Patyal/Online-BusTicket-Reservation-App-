import React,{ useRef,useState,useEffect } from "react";
import './style.css';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SeatPicker from "react-seat-picker";
import { LocalPlaySharp } from "@material-ui/icons";




function UserHome(){

    const [bus,setBus]=useState();
    const [dataUrl,setDataUrl]=useState(`http://localhost:1212/bus/date`);
    const [routeFrom,setRouteFrom]=useState();
    const [routeTo,setRouteTo]=useState();
    const fromValue = useRef('');
    const history=useHistory();
    const [num, setNum]= useState(1);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [article,setArticle] = useState({});
    const [inputFields,setInputFields]=useState([]);
    var [names,setNames]=useState("");
    var [ages,setAges]=useState("");
    var [genders,setGenders]=useState("");
    const [user,setUser] = useState({});

    const [item,setItem]=useState({"busId":233,
    "routeFrom":"Hyderabad",
    "routeTo":"Mumbai",
    "from":"22-22-22",
    "till":"22-2-22",
    "type":"non-ac",
    "fare":2000
});
const [busList,setBusList]=useState([]);

const cartUrl=`http://localhost:1112/cart`;
const seatUrl=`http://localhost:1212/bus/seats`;
const passengerUrl=`http://localhost:1911/passenger`;

useEffect(() => {
    setUser({
        "userName":localStorage.getItem("name"),
    });
    
}, [])

    const handleInputChange1=(e)=>{
        e.preventDefault();
        setBus({
            ...bus,
            "from":e.target.value
        });
        setRouteFrom(e.target.value);
        
    }
    const handleInputChange2=(e)=>{
        e.preventDefault();
        setBus({
            ...bus,
            "to":e.target.value
        });
        setRouteTo(e.target.value);
        
    }

    const onSearch=(e)=>{
        if(localStorage.getItem("name")==null){
            console.log(localStorage.getItem("name"));
            alert("You need to login first");
            history.push("/login");

        }
        else{
        e.preventDefault();
        localStorage.setItem("routeFrom",routeFrom);
        localStorage.setItem("routeTo",routeTo);
        console.log(localStorage.getItem("routeFrom"));
        console.log(localStorage.getItem("routeTo"));
        axios.post(`${dataUrl}`,bus)
            .then((response)=>{
                if(response.data.length!=0){
                console.log(response.data);
                setBusList(response.data);
                }
                else{
                    alert("No Buses available for such route");
                }
            })
            .catch((err)=>{
                console.log(err.message);
                alert("Data not found.");
                setBusList([]);
            });
        }
        }

    // const saveData=(article)=>{
    //     article.userName=localStorage.getItem("name");
    //     console.log(num);
    //     localStorage.setItem("seats",num);
    //     console.log(localStorage.getItem("seats"));
    //     article.seatsBooked=num;
    //     console.log(article.seatsBooked);
    //     axios.post(cartUrl,article)
    //     .then((response)=>{
    //         alert('Added to Cart');
            
    //     })
    //     .catch((err)=>{
    //         alert('Sorry could not be added');
    //         console.log(err.response);
    //     });
    // }

    const saveData=(e)=>{
        if(num<=0){
            alert("Select a number greater than 0");
        }
        else if(article.noOfSeats>=num){
        e.preventDefault();
        article.userName=localStorage.getItem("name");
        console.log(num);
        localStorage.setItem("seats",num);
        console.log(localStorage.getItem("seats"));
        console.log(article.seatsBooked);
        article.seatsBooked+=Number(num);
        article.noOfSeats-=Number(num);
        axios.put(seatUrl,article)
        .then((response)=>{
            console.log("Updated seats");
        })
        .catch((err)=>{
            alert('Sorry could not be added');
            console.log(err.response);
        });
        article.seatsBooked=Number(num);
        axios.post(cartUrl,article)
        .then((response)=>{
            console.log('Added to Cart');
            
        })
        .catch((err)=>{
            alert('Sorry could not be added');
            console.log(err.response);
        });
        

        setShow(false);
        setShow1(true);
        for(var i=0;i<num;i++){
            // x.push({name:"",age:"",gender:""});
            inputFields.push({name:"",age:"",gender:""});
        }

    }
    else{
        alert("No Seats Available");
    }   
    }


    const handleDateChange=(value)=>{
        console.log(fromValue.current.value)
        setBus({
            ...bus,
            "start":fromValue.current.value,
        });
    }

    const handleChange=(e)=>{
        
            setNum(e.target.value);
        
    }
    // const handleChange = (e)=>{
    //     e.preventDefault();
    //     setNum(e.target.value);
    //     console.log(num);
    //     localStorage.setItem("seats",num);
    //     console.log(localStorage.getItem("seats"));
    //     setBus({
    //         ...bus,
    //        "seatsBooked":e.target.value 
    //     });
    //    }


    let incNum =(item)=>{
        
            setNum(Number(num)+1);
        
      };
      let decNum = (item) => {
         if(num>0)
         {
            setNum(num-1);
         }
         
      }
      
      const handleClose = () => setShow(false);
    const handleShow = (e,item) => {
        e.preventDefault();
        setShow(true);
    setArticle(item);
    }
    const handleClose1 = (e) =>{
        e.preventDefault();

        console.log(num);
       
        setShow(false);

    }


    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    
    const handleClose3=async(e)=>{
        e.preventDefault();
    
            
            setShow1(false);
            setInputFields([]);
            
            console.log(inputFields);
            for(let i=0;i<inputFields.length;i++){
                names=names+inputFields[i].name+" ";
                ages=ages+inputFields[i].age+" ";
                genders=genders+inputFields[i].gender+" ";
            }
            
            user.busId=article.busId;
            user.names=names;
            user.age=ages;
            user.gender=genders;
    
            // await setUser({
            //     ...user,
            //     "busId":localStorage.getItem("id"),
            //     "userName":localStorage.getItem("name"),
            //     "names":names,
            //     "age":ages,
            //     "gender":genders
            // });
            axios.post(passengerUrl,user)
            .then((response) => {
                alert("Added to Cart");
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
                alert("Details could not be added.");
            });
        console.log(user)
            
            
            setTimeout(()=>{
            console.log(names);
            console.log(ages);
            console.log(genders);
            console.log(user);});
    }
    
    const handleClose2 = () => setShow1(false);
    
        



    return(
        <div className="container">
            <marquee behavior="scroll" direction="left" scrollamount="15" bgcolor="yellow">Book Tickets for more than 5000 rupees and get different DISCOUNTS.</marquee>
            <div>
            <marquee behavior="scroll" direction="right" scrollamount="25" bgcolor="red">DISCOUNTS AVAILABLE NOW!</marquee>
                <div className="form">
                    <div className="form-body">
                    <h4 style={{textAlign:"center"}}>Hi, {localStorage.getItem("name")} </h4>
                    <h3 style={{textAlign:"center",color:"teal"}}>
                    Hope you have a great journey!
                </h3>
                <p style={{textAlign:"center"}}><i class="bi-search"></i>Search bus <i class="fa fa-bus"></i></p>
                    <div className="routeFrom">
                    <label className="form__label" for="lastName"><i class="bi-signpost-2"></i>From</label>
                    <select name="routeFrom" >
                        <option name="routeFrom" value="Goa" onClick={(e) => handleInputChange1(e)}>Goa</option>
                        <option name="routeFrom" value="Hyderabad" onClick={(e) => handleInputChange1(e)}>Hyderabad</option>
                        <option name="routeFrom" value="Bangalore" onClick={(e) => handleInputChange1(e)}>Bangalore</option>
                        <option name="routeFrom" value="Mumbai" onClick={(e) => handleInputChange1(e)}>Mumbai</option>
                    </select>
                </div>
                <div className="routeTo">
                    <label className="form__label" for="lastName"><i class="bi-signpost-2"></i>To</label>
                    <select name="routeTo" >
                        <option name="routeTo" value="Goa" onClick={(e) => handleInputChange2(e)}>Goa</option>
                        <option name="routeTo" value="Hyderabad" onClick={(e) => handleInputChange2(e)}>Hyderabad</option>
                        <option name="routeTo" value="Bangalore" onClick={(e) => handleInputChange2(e)}>Bangalore</option>
                        <option name="routeTo" value="Mumbai" onClick={(e) => handleInputChange2(e)}>Mumbai</option>
                    </select>
                </div>
                <TextField
                    className="form-control mt-3"
                    id="date"
                    label="date"
                    type="date"
                    defaultValue="2022-08-08"
                    inputRef={fromValue}
                    onChange={({fromValue})=>handleDateChange()}
                    InputLabelProps={{
                    shrink: true,
                }}/>
                <br/><br/>
                <input className="form-control mt-3 btn btn-success" type="submit" value="Search" onClick={(e)=>onSearch(e)}/>
                </div>                
                </div>
                <div>
                <div>
        
      </div>
      <div>
      {busList.map((item)=>(
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
          <div className="type">
              <p>seats available:{item.noOfSeats}</p>

          </div>
          <div className="fare">
          <i class="fa fa-inr" aria-hidden="true"></i>
              {item.fare}

          </div>

        {/* <div className="fare">
          <input type="number" className="form__input" name="num" value={num} onChange={handleChange}/>
        </div> */}

              {/* <div className="fare smaller-input">
          <div className="col-s-1">
    <div className="input-group">
  <div className="input-group-prepend">
    <button className="btn btn-outline-dark btn-light btn-sm" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" className="form-control col-sm-4 smaller-input" value={num} onChange={handleChange}/>
  <div className="input-group-prepend">
    <button className="btn btn-outline-dark btn-light btn-sm" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
</div> */}

        <div className="fare">
        <button type="submit" className="btn btn-dark text-light" onClick={(e)=>handleShow(e,item)}><i class="bi-bag-plus-fill"></i>Book</button>
        <Modal show={show} onHide={handleClose} centered="true">
                                    <Modal.Header >
                                    <Modal.Title>no of seats</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                        </div>
                                        <input type="text" className="form-control col-sm-4 smaller-input" value={num} onChange={handleChange}/>
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                        </div>
                                        </div> 
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={saveData}>
                                        Confirm
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Modal show={show1} onHide={handleClose2} centered="true" >
                                    <Modal.Header >
                                    <Modal.Title>Passenger Details</Modal.Title>
                                    </Modal.Header>
                                    <form onSubmit={handleClose3}>
                                    <Modal.Body  >
                                    
                                        {inputFields.map((input, index) => {
                                            
                                            
                                        return (
                                            <div key={index}>
                                                
                                            <input
                                                name='name'
                                                placeholder='Name'
                                                value={input.name}
                                                onChange={event => handleFormChange(index, event)}
                                                required
                                            />
                                            <input
                                                name='age'
                                                placeholder='Age'
                                                value={input.age}
                                                onChange={event => handleFormChange(index, event)}
                                                required
                                            />
                                            <input
                                                name='gender'
                                                placeholder='gender'
                                                value={input.gender}
                                                onChange={event => handleFormChange(index, event)}
                                                required
                                            />
                                            
                                            
                                            <br/>
                                            <br/>
                                            </div>
                                         )
                                         })}
                                         {/* <button onClick={addField}>Add More..</button>  */}
                                        
                                    
                                    </Modal.Body>
                                    
                                    <Modal.Footer>
                                    <Button variant="secondary"size="sm" onClick={handleClose2}>
                                        Close
                                    </Button>
                                    <Button variant="success" size="sm" type="submit">Submit</Button>
                                    {/* <Button variant="primary" size="sm" onClick={handleClose3} >
                                        Submit
                                    </Button> */}
                                    </Modal.Footer>
                                    </form>
                                </Modal> 

 

       </div>
      </div>))}
      </div>
                </div>
            </div>

        </div>
    )
}
export default UserHome;

