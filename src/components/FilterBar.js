
function FilterBar({setRegionFilter, setCountryFilter, restaurants, regionFilter, countryFilter}) {

    function setRegionOptions(restaurants) {
        const regionOptions = [...new Set(restaurants
            .filter(restaurant => restaurant.country.toLowerCase().includes(countryFilter.toLowerCase()))
            .map(restaurant => restaurant.region))];
        return (regionOptions.map(region => <option value={region}/>))
    }
    function setCountryOptions(restaurants) {
        const countryOptions = [...new Set(restaurants
            .filter(restaurant => restaurant.region.toLowerCase().includes(regionFilter.toLowerCase()))
            .map(restaurant => restaurant.country))];
        return (countryOptions.map(country => <option value={country}/>))
    }

    return(
        <div>
            <div id="filterByRegion">
            <label>Choose a Region:</label>
            <input autoComplete="on"list="region-options" onChange={(e) => setRegionFilter(e.target.value)}/>
            </div>
            <div>
                <datalist id="region-options">
                    {setRegionOptions(restaurants)}
                </datalist>
            </div>
            <div id="filterByCountry">
            <label>Choose a Country:</label>
            <input autoComplete="on"list="country-options" onChange={(e) => setCountryFilter(e.target.value)}/>
            </div>
            <div>
                <datalist id="country-options">
                    {setCountryOptions(restaurants)}
                </datalist>
            </div>
        </div>
    )
}

export default FilterBar;