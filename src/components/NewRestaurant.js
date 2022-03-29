import React, {useState} from "react";

function NewRestaurant({handleFrontEnd}){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [region, setRegion] = useState("")
    const [address, setAddress] = useState("")
    const [url, setUrl] = useState("")
    const [country, setCountry] = useState("")

    function handleName(event) {
        setName(event.target.value)
      }
      function handleImage(event) {
        setImage(event.target.value)
      }
    function handleRegion(event) {
        setRegion(event.target.value)
      }
      function handleAddress(event) {
        setAddress(event.target.value)
      }function handleUrl(event) {
        setUrl(event.target.value)
      }
      function handleCountry(event) {
        setCountry(event.target.value)
      }
      
      function handleSubmit(e){
        e.preventDefault();
        const newRestaurant = {
        name: name,
        region: region,
        country: country,
        image: image,
        url: url,
        address: address 
      };

      fetch("http://localhost:3001/restaurants", {
        method : "POST",
        headers : { "Content-Type": "application/json",
        Accepts: "application/json",},
        body: JSON.stringify(newRestaurant),
      })
      .then((r) => r.json())
      .then((newRestaurant) => handleFrontEnd(newRestaurant))
    
        e.target.reset();

    
    }
  
    return (
        
        
     <div className="new-Restaurant-form">
     <h2>Add New Restaurant</h2>
            <form onSubmit={handleSubmit}>
             
                <label>Restaurant Name:</label>
                    <input onChange={handleName} type="text" name="name" placeholder="Restaurant Name" required />
                
                <label>Restaurant Image:</label>
                    <input onChange={handleImage} type="text" name="image" placeholder="Image URL" />
                
                <label>Restaurant Link:</label>
                    <input onChange={handleUrl} type="url"  name="url" placeholder="https://example.com" required/>
                
                <label>Restaurant Address:</label>
                    <input onChange={handleAddress} type="text" name="address" placeholder="Address" />
               
                <label>Region:</label>
                    <input onChange={handleRegion} type="text" name="region" placeholder="Region" />
                
                <label>Country:</label>
                    <input onChange={handleCountry} type="text" name="country" placeholder="Country" />

                <input type="submit" className="newSubmit" value="Add Restaurant" />
            </form>
    </div>
    
    )
}



export default NewRestaurant;