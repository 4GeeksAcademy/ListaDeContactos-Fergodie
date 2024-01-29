import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Edit = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
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
		actions.editContact(params.id, data, volverHome)

	}
	useEffect(() => {
		let contacto = store.contacts.find(c => c.id == params.id ) 
		if (contacto){
			setData(contacto)
		}
	}, [])

	return (

		<form onSubmit={handleSubmit} className="container" >
			<div className="mb-3">
				<label htmlFor="imputName" className="form-label">Full Name</label>
				<input type="name" name="full_name" className="form-control" id="imputName" placeholder="Full Name"
					onChange={(e) => handleChange(e)} defaultValue={data.full_name}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
				<input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email"
					onChange={(e) => handleChange(e)} defaultValue={data.email}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="inputPhone" className="form-label">Phone</label>
				<input type="phone" name="phone" className="form-control" id="inputPhone" placeholder="Enter Phone"
					onChange={(e) => handleChange(e)} defaultValue={data.phone}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="inputAddress" className="form-label">Address</label>
				<input type="address" name="address" className="form-control" id="inputAddress" placeholder="Enter Address"
					onChange={(e) => handleChange(e)} defaultValue={data.address}
				/> 
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>

	);
};


