import {useState, useEffect} from 'react';
import FilterBar from './FilterBar';
import RestaurantList from './RestaurantList';

function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [regionFilter, setRegionFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  function getRestaurants() {
    fetch('http://localhost:3001/restaurants')
    .then(resp => resp.json())
    .then(restaurantData => setRestaurants(restaurantData))
  }

  useEffect(getRestaurants, []);

  return (
    <div className='app'>
      <div className='sidebar'>
        <h2>Sort Restaurants by:</h2>
        <FilterBar
          regionFilter={regionFilter}
          countryFilter={countryFilter} 
          setRegionFilter={setRegionFilter} 
          setCountryFilter={setCountryFilter} 
          restaurants={restaurants}
        />
      </div>
      <div className='restaurant-list'>
        <img className="logo" src={"https://m.media-amazon.com/images/I/71FvhMzUBRL._AC_SL1000_.jpg"} alt="logo" />
        <h1 id="restaurant">Restaurants</h1>
        <RestaurantList 
          regionFilter={regionFilter} 
          countryFilter={countryFilter} 
          restaurants={restaurants}
        />
      </div>
    </div>
  );
}

export default App;
