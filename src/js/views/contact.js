import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactCard } from "../component/contactCard";

import { Context } from "../store/appContext";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	return (

		<div className="container">

			<h1>Cantidad de contactos: {store.contacts.length}</h1>
			<div className="p-2">
				<ul>
					{store.contacts.map((contact, index) => {
						return (
							<li className="row contact" key={index}>
								<ContactCard contact={contact} />
							</li>
						)

					})}
				</ul>

			</div>
		</div>


	);
};

