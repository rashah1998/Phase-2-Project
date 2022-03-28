import RestaurantCard from './RestaurantCard';

function RestaurantList({restaurants}) {

    const renderRestaurants = restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>);

    return (
        <div>
            {renderRestaurants}
        </div>
    )
}

export default RestaurantList;