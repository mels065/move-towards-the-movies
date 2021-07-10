// Mapbox API Key
MAPBOX_API_KEY = "pk.eyJ1IjoibWVsbHVzYnJhbmRvbiIsImEiOiJja3FzcXQ0bG4ycWFrMm9tdmN3bmNxZHd3In0.zp0RMIIVSgMBMW_E-JycrQ";
// The endpoint used for fetching data from geocoding
MAPBOX_ENPOINT = "https://api.mapbox.com/geocoding/v5/mapbox.places";
// Sets the API call to use postcodes for retrieving data from geocoding
MAPBOX_PARAMS = `types=postcode&access_token=${MAPBOX_API_KEY}`;

// Generates the full URL for the API call
function generateApiCall(zipcode) {
    return `${MAPBOX_ENPOINT}/${zipcode}.json?${MAPBOX_PARAMS}`;
}
