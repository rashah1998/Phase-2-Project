import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import Review from "./Review";

function RestaurantDetail() {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [rating, setRating] = useState(null)
    const [comment, setComment] = useState("")
    useEffect(() => {
        fetch(`http://localhost:3001/restaurants/${id}`)
          .then((resp) => resp.json())
          .then((restaurantData) => {
            setRestaurant(restaurantData);
            setReviews(restaurantData.reviews);
            setIsLoaded(true);
          });
    }, [id]);
        

    function handleSubmit(e){
        e.preventDefault();
        const newReview = {
            restaurantId : parseInt(id),
            rating : parseInt(rating),
            comments: comment,
        }
        fetch("http://localhost:3001/reviews", {
        method : "POST",
        headers : { "Content-Type": "application/json",
        Accepts: "application/json",},
        body: JSON.stringify(newReview),
        })
        .then((r) => r.json())
        .then((newReview) => setReviews([...reviews, newReview]))

        e.target.reset();

    }
    
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
                <button id="showReviewForm" onClick={() => setShowForm(!showForm)}><span>Add a Review</span></button>
            {showForm? 
            <form id="reviewForm" onSubmit={handleSubmit}>
                <input onChange={(e) => setRating(e.target.value)} type="number" min={1} max={5} placeholder="Enter a Rating"></input>
                <input onChange={(e) => setComment(e.target.value)}type="text" placeholder="Enter a Review"></input>
                <input id="SubmitReview" type="submit" value="Submit Review"></input>
            </form>
             : null }
            </div>
        </div>
    );
}

export default RestaurantDetail;