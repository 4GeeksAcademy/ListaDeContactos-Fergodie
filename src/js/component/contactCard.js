import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {
    const { store, actions } = useContext(Context);


    return (

        <>
            <div className="d-flex container border border-2">
                <div className="col-md-3 image p-2 ">
                    <img
                        src="https://picsum.photos/id/237/200"
                        className=" rounded-circle "
                        alt=""
                        srcSet=""
                    />
                </div>
                <div className="col-md-7 col-10 d-flex flex-column align-items-start">
                    <div className="name fs-3"><strong>{contact.full_name}</strong></div>
                    <div className="address">
                        <i className="fas fa-map-marker-alt p-2" />
                        {contact.address}
                    </div>
                    <div className="phone">
                        <i className="fas fa-phone p-2" />
                        {contact.phone}
                    </div>
                    <div className="email">
                        <i className="fas fa-envelope p-2" />
                        {contact.email}
                    </div>
                    
                    <div className="ml-auto">
                        <div className="d-flex justify-content-end">
                            <button onClick={() => actions.borrarContact(contact.id)}><i className="fas fa-trash-alt" /></button>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button><Link to={`/editContact/${contact.id}`}><i className="far fa-edit" /></Link></button>
                        </div>

                    </div>
                    
                </div>
            </div>
        </>

    )


}

