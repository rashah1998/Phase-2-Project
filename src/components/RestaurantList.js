import RestaurantCard from './RestaurantCard';

function RestaurantList({restaurants}) {

    const renderRestaurants = restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>);

    return (
        <main>
        <ul className="cards">{renderRestaurants}</ul>
      </main>
    )
}

export default RestaurantList;