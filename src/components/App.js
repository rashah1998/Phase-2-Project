import {useState, useEffect} from 'react';
import RestaurantList from './RestaurantList';

function App() {

  const [restaurants, setRestaurants] = useState([]);

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
      </div>
      <div className='restaurant-list'>
        <img className="logo" src={"https://m.media-amazon.com/images/I/71FvhMzUBRL._AC_SL1000_.jpg"} alt="logo" />
        <h1 id="restaurant">Restaurants</h1>
        <RestaurantList restaurants={restaurants}/>
      </div>
    </div>
  );
}

export default App;
