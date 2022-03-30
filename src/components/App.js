import {useState, useEffect} from 'react';
import FilterBar from './FilterBar';
import NewRestaurant from './NewRestaurant';
import RestaurantList from './RestaurantList';
import AboutUs from './AboutUs';
import Banner from './Banner';
function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [regionFilter, setRegionFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [isShow , setShow] = useState(false);

  function toggleShow() {
    setShow(!isShow)
  }
  function getRestaurants() {
    fetch('http://localhost:3001/restaurants')
    .then(resp => resp.json())
    .then(restaurantData => setRestaurants(restaurantData))
  }
  function handleFrontEnd(newRestaurantObject) {
    const addNewRestaurantObject = [...restaurants, newRestaurantObject]
      setRestaurants(addNewRestaurantObject);
    }
  useEffect(getRestaurants, []);

  return (
    <div>
      <Banner />
      <div className='app'>
        <div className='sidebar'>
          <h2 id="sort">Sort by:</h2>
          <FilterBar
            regionFilter={regionFilter}
            countryFilter={countryFilter} 
            setRegionFilter={setRegionFilter} 
            setCountryFilter={setCountryFilter} 
            restaurants={restaurants}
          />
        </div>
        <div className='restaurant-list'>
          <NewRestaurant handleFrontEnd={handleFrontEnd}/>
          <RestaurantList 
            regionFilter={regionFilter} 
            countryFilter={countryFilter} 
            restaurants={restaurants}
          />
          <button className="aboutUsBtn" onClick={toggleShow}><span>About Us</span></button>
          {isShow ? <AboutUs /> : null}            
        </div>
      </div>
    </div>
  );
}

export default App;