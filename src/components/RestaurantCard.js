import React, { useState } from "react";
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant, newLike, setNewLike }) {

    const { id, region, country, image, url, address, name, avgRating } = restaurant;
    let { like } = restaurant;
    const [liked, setLiked] = useState(like);


    function handleLike() {
        fetch(`http://localhost:3001/restaurants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify({ like: !liked })
        })
        .then(resp => resp.json())
        .then(data => {
            setLiked(!liked)
            setNewLike(!newLike)
        })
    }

    const average = Math.round((avgRating) * 10)/10;

    return (
            <li className="card">
                <div className="text">
                    <Link id="card-name" to={`/${id}`}>
                        <img id="restaurant-image" src={image} alt={name} />
                        <h4>{name}</h4>
                    </Link>
                    <p>{region}, {country}</p>
                    <h5>{address}</h5>
                    {average === 0 ? (<h4>Rating: No Reviews Yet</h4>) : (<h4>Rating: {average}</h4>) }
                    <a className="button" href={url}>Order Here</a>
                    {liked ? <button id='like-button-red' onClick={handleLike}>❤️</button>
                        : <button id='like-button-white' onClick={handleLike}>🤍</button>}

                </div>
            </li>
        )
    }

    export default RestaurantCard;