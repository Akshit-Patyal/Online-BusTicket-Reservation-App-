import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from "./Components/Header";
 import Page404 from './Components/Page404';
import View from "./Components/View";
import Login from "./Components/Login";
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import RegistrationForm from './Components/RegistrationForm';
import AddBus from './Components/AddBus';
import SearchRoute from './Components/UserHome';
import Cart from './Components/Cart';
import UserHome from './Components/UserHome';
import OwnerHome from './Components/OwnerHome';
import Payment from './Components/Payment';

const Routes = () => {

    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                    <Switch>
                            <Route exact path="/" > <Login /> </Route>
                            <Route exact path="/get" > <View /> </Route>
                            <Route exact path="/login" > <Login /> </Route>
                            <Route path="/cart" > <Cart /></Route>
                            <Route path="/forgotpassword" > <ForgotPassword /></Route>
                            <Route path="/resetpassword" > <ResetPassword /></Route>
                            <Route path="/registration" > <RegistrationForm /></Route>
                            <Route path="/addbus" > <AddBus /></Route>
                            <Route path="/search" > <UserHome /></Route>
                            <Route path="/owner" > <OwnerHome /> </Route>
                            <Route path="/payment" > <Payment /> </Route>
                            <Route path="/*" > <Page404 /> </Route>
                            </Switch>
                    </div>
                   
                </div>
            </Router>
        </div>
    );

}
export default Routes;