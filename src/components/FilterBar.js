
function FilterBar({setRegionFilter, setCountryFilter, restaurants, regionFilter, countryFilter}) {

    function setRegionOptions(restaurants) {
        const regionOptions = [...new Set(restaurants
            .filter(restaurant => restaurant.country.toLowerCase().includes(countryFilter.toLowerCase()))
            .map(restaurant => restaurant.region))];
        return (regionOptions.map((region, index) => <option key={index} value={region}/>))
    }
    function setCountryOptions(restaurants) {
        const countryOptions = [...new Set(restaurants
            .filter(restaurant => restaurant.region.toLowerCase().includes(regionFilter.toLowerCase()))
            .map(restaurant => restaurant.country))];
        return (countryOptions.map((country, index) => <option key={index} value={country}/>))
    }

    function handleReset(e) {
        e.preventDefault();
        e.target.reset();
        setCountryFilter('');
        setRegionFilter('');
    }

    return(
        <form id="filterContainer" onSubmit={(e) => handleReset(e)}>
            <div id="filterByRegion">
            <label id="firstText" className="sortText">Region:  </label>
            <input autoComplete="on"list="region-options" onChange={(e) => setRegionFilter(e.target.value)}/>
            </div>
            <div>
                <datalist id="region-options">
                    {setRegionOptions(restaurants)}
                </datalist>
            </div>
            <div id="filterByCountry">
            <label className="sortText">Country:</label>
            <input autoComplete="on"list="country-options" onChange={(e) => setCountryFilter(e.target.value)}/>
            </div>
            <div>
                <datalist id="country-options">
                    {setCountryOptions(restaurants)}
                </datalist>
            </div>
            <input id="resetBtn" type="submit" value="Reset Filters"/>
        </form>
    )
}

export default FilterBar;