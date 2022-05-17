import { Link } from "react-router-dom";
import React from "react";

const Page404 = () => {
    return (
        <div className="container">
            <h1 className="display-4 text-light">Oops!</h1>
            <p className="display-5 text-light">The page you are looking for is not found.</p>
            <Link className="btn btn-primary" to="/login" >Let's go home...</Link>

        </div>
    );
}

export default Page404;