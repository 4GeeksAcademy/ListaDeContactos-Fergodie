import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
   
export const ContactCard = ({ contact }) => {
    const { store, actions } = useContext(Context);


    return (

        <>
            <div className="col-md-3 image p-2">
                <img
                    src="https://picsum.photos/id/237/200"
                    className=" rounded-circle "
                    alt=""
                    srcSet=""
                />
            </div>
            <div className="col-md-7 col-10 p-5">
                <div className="name">{contact.full_name}</div>
                <div className="address">
                    <i className="fas fa-map-marker-alt" />
                    {contact.address}
                </div>
                <div className="phone">
                    <i className="fas fa-phone" />
                    {contact.phone}
                </div>
                <div className="email">
                    <i className="fas fa-envelope" />
                    {contact.email}
                </div>
                <div className="iconos">
                    <button onClick={() => actions.borrarContact(contact.id)}><i className="fas fa-trash-alt" /></button>
                    <i className="far fa-edit" />
                </div>
            </div>
        </>

    )


}

