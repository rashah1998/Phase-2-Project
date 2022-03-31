import {useState, useEffect} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import FilterBar from './FilterBar';
import NewRestaurant from './NewRestaurant';
import RestaurantList from './RestaurantList';
import AboutUs from './AboutUs';
import Banner from './Banner';
import RestaurantDetail from './RestaurantDetail';
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
          <h2 id="sort">Sort Restaurants by:</h2>
          <FilterBar
            regionFilter={regionFilter}
            countryFilter={countryFilter} 
            setRegionFilter={setRegionFilter} 
            setCountryFilter={setCountryFilter} 
            restaurants={restaurants}
          />
          <Link to="/newRestaurant"><button id="addBtn">Add Your Favorite Restaurant!</button></Link>
        </div>
        <div className='restaurant-list'>
        <Switch>
          <Route path="/newRestaurant">
            <NewRestaurant handleFrontEnd={handleFrontEnd}/>
          </Route>
          <Route exact path="/">
            <RestaurantList 
              regionFilter={regionFilter} 
              countryFilter={countryFilter} 
              restaurants={restaurants}
            />
          </Route>
          <Route path="/:id">
            <RestaurantDetail />
          </Route>
        </Switch>          
        </div>
      </div>
      <AboutUs toggleShow={toggleShow} isShow={isShow}/>
    </div>
  );
}

export default App;
