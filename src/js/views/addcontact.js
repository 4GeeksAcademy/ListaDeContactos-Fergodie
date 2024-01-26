import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [data, setData] = useState({
        agenda_slug: "diegoF"
    });
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        function volverHome () {
            navigate("/")
        }
        actions.añadirContact(data, volverHome)
     
    }


    return (
        <form onSubmit={handleSubmit} className="container" >
            <div className="mb-3">
                <label htmlFor="imputName" className="form-label">Full Name</label>
                <input type="name" name="full_name" className="form-control" id="imputName" placeholder="Full Name"
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email"
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">Phone</label>
                <input type="phone" name="phone" className="form-control" id="inputPhone" placeholder="Enter Phone"
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="address" name="address" className="form-control" id="inputAddress" placeholder="Enter Address"
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};
