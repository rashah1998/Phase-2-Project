import {useState, useEffect} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import FilterBar from './FilterBar';
import NewRestaurant from './NewRestaurant';
import RestaurantList from './RestaurantList';
import AboutUs from './AboutUs';
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
        <Link to="/newRestaurant">Add a New Restaurant</Link>
      </div>
      <div className='restaurant-list'>
        <Link exact to="/">
          <img className="logo" src={"https://m.media-amazon.com/images/I/71FvhMzUBRL._AC_SL1000_.jpg"} alt="logo" />
          <h1 id="restaurant">Restaurants</h1>
        </Link>
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
        </Switch>
        <button className="aboutUsBtn" onClick={toggleShow}><span>About Us</span></button>
        {isShow ? <AboutUs /> : null}            
      </div>
    </div>
  );
}

export default App;
