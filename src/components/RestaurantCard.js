
function RestaurantCard({restaurant}) {
    
    const {region, country, image, url, address, name} = restaurant;

    return (
        <div>
        <img src={image} alt={name} />
          <h4>{name}</h4>
          <p>{region}, {country}</p>
          <h5>{address}</h5>
          <a href={url}>Order</a>
        </div>
    )
}

export default RestaurantCard;