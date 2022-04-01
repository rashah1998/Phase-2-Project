import RestaurantCard from './RestaurantCard';

function RestaurantList({restaurants, regionFilter, countryFilter, setNewLike, newLike}) {

    const renderRestaurants = restaurants
    .filter(restaurant => restaurant.region.toLowerCase().includes(regionFilter.toLowerCase()))
    .filter(restaurant => restaurant.country.toLowerCase().includes(countryFilter.toLowerCase()))
    .map(restaurant => <RestaurantCard 
        key={restaurant.id} 
        restaurant={restaurant} 
        setNewLike={setNewLike}
        newLike={newLike}
        />);

    return (
        <main>
        <ul className="cards">{renderRestaurants}</ul>
      </main>
    )
}

export default RestaurantList;