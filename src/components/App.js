import {useState, useEffect} from 'react';
import NewRestaurant from './NewRestaurant';
import RestaurantList from './RestaurantList';
import AboutUs from './AboutUs';
function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [isShow , setShow] = useState(true);

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
      </div>
      <div className='restaurant-list'>
        <img className="logo" src={"https://m.media-amazon.com/images/I/71FvhMzUBRL._AC_SL1000_.jpg"} alt="logo" />
        <h1 id="restaurant">Restaurants</h1>
        <NewRestaurant handleFrontEnd={handleFrontEnd}/>
        <RestaurantList restaurants={restaurants}/>
            <button className="aboutUsBtn" onClick={toggleShow} >
              <span>About Us</span></button>
            {isShow ? <AboutUs /> : null}
      </div>
    </div>
  );
}

export default App;
