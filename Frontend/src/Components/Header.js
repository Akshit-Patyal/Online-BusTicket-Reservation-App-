import { Link } from "react-router-dom";
import React from "react";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Navbar, Nav, Container, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core"; 


const Header = () => {

    const feedUrl="http://localhost:1211/feedback";
    const [show, setShow] = useState(false);
    const [feedback,setFeedBack]=useState({});
    const [isLoggedin, setIsLoggedin] = useState(false);


    const handleClose1 = (e) =>{
        e.preventDefault();
        console.log(feedback);
        axios.post(`${feedUrl}`,feedback)
        .then(()=>
        {
            alert("thank you for your feedback");
        })
        //.catch(alert("something's wrong"));
        setShow(false);

        setFeedBack();

    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange=(e)=>{
        
        setFeedBack({
            ...feedback,
            "feedback":e.target.value}
        )

    }

    const logout = () => {
        localStorage.removeItem('name');
        setIsLoggedin(false);
      };
        


    return (
        <header className="header sticky-top bg-dark">
            <nav className="navbar navbar-fixed-top navbar-expand-lg" style={{'height':'50px'}}>
                <div className="container-fluid">
                <Link to="/" className="navbar-brand align-left nav-item text-light">
                <i class="fa fa-bus"></i><b>BUS TICKET RESERVATION</b>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item text-info">
                                <Link to="/cart" className="nav-link text-light"><b><i class="bi bi-cart"></i>Cart</b></Link>
                            </li>
                            <li className="nav-item" style={{fontWeight: 'bold',color: 'red',}}>
                                {/* <Link to="/viewfav" className="nav-link" >Favs</Link> */}
                                <Link type="button" class="nav-link text-light" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i class="bi-chat-square-text"></i>Feedback
                                </Link>
                                <Modal show={show} onHide={handleClose} centered="true">
                                    <Modal.Header closeButton>
                                    <Modal.Title>feedback</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <textarea rows = "5" cols = "40" name = "description" placeholder="feedback" onChange={handleChange}>
                                       
                                    </textarea>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose1}>
                                        Submit
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                                
                            </li>
                            <li className="nav-item text-info">
                                <Link to="/login" className="nav-link text-light" onClick={logout}><b><i class="bi-box-arrow-left"></i>logout</b></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </header>
    );
}
export default Header;

