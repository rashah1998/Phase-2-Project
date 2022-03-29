import React, {useState} from "react";

function RestaurantCard({restaurant}) {
    
    const {region, country, image, url, address, name} = restaurant;

  
    return (
        <li className="card">
          <div>
        <img id="restaurant-image" src={image} alt={name} />
        <div className="text">
          <h4>{name}</h4>
          <p>{region}, {country}</p>
          <h5>{address}</h5>
          <a className="button" href={url}>Order Here</a>
          </div>
          </div>
        </li>
    )
}

export default RestaurantCard;