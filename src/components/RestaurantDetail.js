import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import Review from "./Review";

function RestaurantDetail() {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        fetch(`http://localhost:3001/restaurants/${id}`)
          .then((resp) => resp.json())
          .then((restaurantData) => {
            setRestaurant(restaurantData);
            setReviews(restaurantData.reviews);
            setIsLoaded(true);
          });
    }, [id]);

    if(!isLoaded) return null;

    const {image, name, url, address, region, country} = restaurant;

    const renderReviews = reviews.map((review, index) => <Review key={index} review={review}/>)
   
    return (
        <div id="restaurant-display-container">
            <div id="restaurant-info-container">
                <div id="name-image-container">
                    <img src={image}/>
                    <h1>{name}</h1>
                </div>
                <div id="info-container">
                    <h1>Region: {region}</h1>
                    <h1>Country: {country}</h1>
                    <h1>Address: {address}</h1>
                    <a className="button" href={url}>Order Here</a>
                </div>
            </div>
            <div id="reviews-container">
                <h1>Reviews</h1>
                {reviews.length === 0 ? <h3>No Reviews Yet. Add a New Review Below!</h3> : renderReviews}
            </div>
        </div>
    );
}

export default RestaurantDetail;