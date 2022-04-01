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
  const [newLike, setNewLike] = useState(false);
  console.log(newLike);

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

  const renderLikedRestaurants = restaurants.map(restaurant => {
    if (restaurant.like === true) {
      return <li key={restaurant.id}><Link to={`/${restaurant.id}`}>{restaurant.name}</Link></li>
    }
  })

  useEffect(getRestaurants, [newLike]);

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
          <h2>Liked Restaurants:</h2>
          <ol>
            {renderLikedRestaurants}
          </ol>
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
              setNewLike={setNewLike}
              newLike={newLike}
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
