import RestaurantCard from './RestaurantCard';

function RestaurantList({restaurants, regionFilter, countryFilter}) {

    const renderRestaurants = restaurants
    .filter(restaurant => restaurant.region.toLowerCase().includes(regionFilter.toLowerCase()))
    .filter(restaurant => restaurant.country.toLowerCase().includes(countryFilter.toLowerCase()))
    .map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>);

    return (
        <main>
        <ul className="cards">{renderRestaurants}</ul>
      </main>
    )
}

export default RestaurantList;