import React from "react";
import { Link } from "react-router-dom";



export const ContactCard = ({contact}) => {


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
                {/* Colocar despues un icono */}
                {contact.address}
            </div>
            <div className="phone">
                {/* Colocar despues un icono */}
                {contact.phone}
            </div>
            <div className="email">
                {/* Colocar despues un icono */}
                {contact.email}
            </div>
        </div>
    </>

)


}

