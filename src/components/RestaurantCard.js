import React, {useState} from "react";
import {Link} from "react-router-dom";

function RestaurantCard({restaurant}) {
    
    const {id, region, country, image, url, address, name} = restaurant;

  
    return (
        <li className="card"> 
            <div className="text">
                <Link id="card-name"to={`/${id}`}>
                    <img id="restaurant-image" src={image} alt={name} />
                    <h4>{name}</h4>
                </Link>
                    <p>{region}, {country}</p>
                    <h5>{address}</h5>
                    <a className="button" href={url}>Order Here</a>
            </div>
        </li>
    )
}

export default RestaurantCard;