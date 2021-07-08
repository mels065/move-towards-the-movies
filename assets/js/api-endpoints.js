/* MAPBOX API */
// Mapbox API Key
const MAPBOX_API_KEY = "pk.eyJ1IjoibWVsbHVzYnJhbmRvbiIsImEiOiJja3FzcXQ0bG4ycWFrMm9tdmN3bmNxZHd3In0.zp0RMIIVSgMBMW_E-JycrQ";
// The endpoint used for fetching data from geocoding
const MAPBOX_ENPOINT = "https://api.mapbox.com/geocoding/v5/mapbox.places";
// Sets the API call to use postcodes for retrieving data from geocoding
const MAPBOX_PARAMS = `types=postcode&access_token=${MAPBOX_API_KEY}`;

/* MOVIEGLU API */
// Movieglu API Key
const MOVIEGLU_API_KEY = "y0r2AdkYtR8SmF0pDcO4u2qivf7rL0dN66BSQd7s";
// The endpoint used for fetching nearby theaters
const MOVIEGLU_ENDPOINT = "https://api-gate2.movieglu.com/cinemasNearby"

// Generates the full URL for the API call
function generateMapBoxApiCall(zipcode) {
    return `${MAPBOX_ENPOINT}/${zipcode}.json?${MAPBOX_PARAMS}`;
}
